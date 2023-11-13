import { Button, Checkbox } from "@nextui-org/react";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { OBJExporter } from "three/examples/jsm/exporters/OBJExporter";

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
    const light = new THREE.DirectionalLight(0xffffff, 0.1);
    loader.parse(objSrc!);
    loader.load(
      objSrc!,
      function (object: THREE.Group<THREE.Object3DEventMap>) {
        object.rotateY(180 / 57.2958);

        {
          isRaf ? (object.scale.x = -1) : object;
        }
        scene.add(light);
        scene.add(object);
      }
    );
  };

  const exportObj = () => {
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
        className="mx-auto block mt-5 bg-primary text-lg font-semibold text-zinc-50"
      >
        Flip
      </Button>
    </>
  );
};

export default Scene;
