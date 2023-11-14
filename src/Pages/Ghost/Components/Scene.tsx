import { Button, Checkbox } from "@nextui-org/react";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { OBJExporter } from "three/examples/jsm/exporters/OBJExporter";
import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils";

interface SceneProps {
  objSrc: string | null;
  isRaf: boolean;
  setIsRaf: (value: boolean) => void;
}

const Scene = ({ objSrc, isRaf, setIsRaf }: SceneProps) => {
  const sceneRef = useRef(null);
  const renderer = new THREE.WebGLRenderer();
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);

  useEffect(() => {
    const container: any = sceneRef.current!;
    scene.background = new THREE.Color("#D8D8D8");
    renderer.setSize(500, 500);
    container.appendChild(renderer.domElement);
    camera.position.z = -200;
    camera.position.y = 300;
    camera.position.x = 100;

    const controls = new OrbitControls(camera, renderer.domElement);

    function animate() {
      requestAnimationFrame(animate);

      controls.update();

      renderer.render(scene, camera);
    }

    displayObject();

    animate();

    return () => {
      container.removeChild(renderer.domElement);
    };
  }, [objSrc, isRaf]);

  const displayObject = () => {
    const loader = new OBJLoader();
    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(0, 100, -100);
    scene.add(light);
    loader.parse(objSrc!);
    loader.load(
      objSrc!,
      function (object: THREE.Group<THREE.Object3DEventMap>) {
        object.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.geometry = BufferGeometryUtils.mergeVertices(child.geometry);
          }
        });
        object.rotateY(180 / 57.2958);

        isRaf && (object.scale.x = -1);

        scene.add(object);
      }
    );
  };

  const exportObj = () => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.geometry = BufferGeometryUtils.mergeVertices(child.geometry);
      }
    });
    const exporter = new OBJExporter();
    const data = exporter.parse(scene);
    const blob = new Blob([data], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    const lafRaf = isRaf ? "RAF" : "Default_or_LAF_";
    link.download = `${
      lafRaf + "_" + (Math.random() * 1000000).toFixed(0)
    }.obj`;
    link.click();
  };

  return (
    <>
      <Checkbox
        size="lg"
        className="font-semibold mx-auto block mb-5"
        onClick={() => setIsRaf(!isRaf)}
      >
        RAF
      </Checkbox>
      <div className="border border-black max-w-max mx-auto" ref={sceneRef} />
      <Button
        onClick={exportObj}
        className="mx-auto mt-10 bg-primary text-lg font-semibold text-zinc-50 flex"
      >
        Download
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
      </Button>
    </>
  );
};

export default Scene;
