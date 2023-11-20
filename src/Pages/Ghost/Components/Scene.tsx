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
    controls.enableDamping = true;

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

  let newPositions: any = [];
  let newIndex: any = [];

  const displayObject = () => {
    const loader = new OBJLoader();
    const light = new THREE.DirectionalLight(0xffffff, 1);
    loader.load(
      objSrc!,
      function (object: THREE.Group<THREE.Object3DEventMap>) {
        const material = new THREE.MeshStandardMaterial({
          emissive: 0x3c4a53,
        });
        object.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.geometry = BufferGeometryUtils.mergeVertices(child.geometry);
            const geometry = child.geometry as THREE.BufferGeometry;

            // Pobierz oryginalne wierzchołki i indeksy
            const positions = geometry.attributes.position.array;
            const indices = geometry.index ? geometry.index.array : null;

            // Mapuj indeksy na unikalne wierzchołki
            const vertexMap = new Map();

            if (indices) {
              for (let i = 0; i < indices.length; i += 3) {
                const index1 = indices[i];
                const index2 = indices[i + 1];
                const index3 = indices[i + 2];

                // Stworzenie klucza na podstawie współrzędnych wierzchołków
                const vertexKey1 = `${positions[index1 * 3]}_${
                  positions[index1 * 3 + 1]
                }_${positions[index1 * 3 + 2]}`;
                const vertexKey2 = `${positions[index2 * 3]}_${
                  positions[index2 * 3 + 1]
                }_${positions[index2 * 3 + 2]}`;
                const vertexKey3 = `${positions[index3 * 3]}_${
                  positions[index3 * 3 + 1]
                }_${positions[index3 * 3 + 2]}`;

                // Sprawdź, czy wierzchołek już istnieje w mapie
                if (!vertexMap.has(vertexKey1)) {
                  const newIndexValue = newPositions.length / 3;
                  vertexMap.set(vertexKey1, newIndexValue);
                  newPositions.push(
                    positions[index1 * 3],
                    positions[index1 * 3 + 1],
                    positions[index1 * 3 + 2]
                  );
                }

                if (!vertexMap.has(vertexKey2)) {
                  const newIndexValue = newPositions.length / 3;
                  vertexMap.set(vertexKey2, newIndexValue);
                  newPositions.push(
                    positions[index2 * 3],
                    positions[index2 * 3 + 1],
                    positions[index2 * 3 + 2]
                  );
                }

                if (!vertexMap.has(vertexKey3)) {
                  const newIndexValue = newPositions.length / 3;
                  vertexMap.set(vertexKey3, newIndexValue);
                  newPositions.push(
                    positions[index3 * 3],
                    positions[index3 * 3 + 1],
                    positions[index3 * 3 + 2]
                  );
                }

                // Dodaj nowe indeksy
                newIndex.push(
                  vertexMap.get(vertexKey1)!,
                  vertexMap.get(vertexKey2)!,
                  vertexMap.get(vertexKey3)!
                );
              }
            } else {
              // Jeśli nie ma indeksów, użyj prostego dodawania wierzchołków
              for (let i = 0; i < positions.length; i += 3) {
                newPositions.push(
                  positions[i],
                  positions[i + 1],
                  positions[i + 2]
                );
                newIndex.push(i / 3);
              }
            }

            child.material = material;
          }
        });
        object.rotateY(180 / 57.2958);

        if (isRaf) {
          object.scale.x = -1;
        }

        scene.add(object);
        scene.add(light);
      }
    );
  };

  const exportObj = () => {
    const simplifiedGeometry = new THREE.BufferGeometry();
    if (isRaf) {
      simplifiedGeometry.applyMatrix4(new THREE.Matrix4().makeScale(-1, 1, 1));
    }
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.geometry.computeVertexNormals();

        // Aktualizuj geometrię
        simplifiedGeometry.setAttribute(
          "position",
          new THREE.BufferAttribute(new Float32Array(newPositions), 3)
        );
        simplifiedGeometry.setIndex(
          new THREE.BufferAttribute(new Uint32Array(newIndex), 1)
        );

        child.geometry.dispose();
        child.geometry = simplifiedGeometry;
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
