import { useContext } from "react";
import { FormContext } from "../../App";
import { Chip, Image, Snippet, Switch } from "@nextui-org/react";

export function Defaults() {
  const { valueX, valueZ, checked, setChecked } = useContext(FormContext);
  const showDefaulsRotation = () => {
    setChecked(!checked);
  };
  return (
    <div>
      <div className="flex justify-center items-center mt-10 mb-5">
        <p className="mr-4 font-semibold">ROTATION</p>
        <Switch
          onChange={showDefaulsRotation}
          size="lg"
          name="checkBoxRotation"
          id="checkBoxRotation"
        />
      </div>
      {!checked ? (
        // NO ROTATION
        <>
          <Chip
            color="primary"
            className="text-lg md:text-xl mx-auto flex py-5 rounded-xl"
            variant="bordered"
          >
            Defaults (no rotation)
          </Chip>
          <Chip
            className="flex mx-auto mt-2 text-sm md:text-md rounded-md"
            variant="flat"
            color="primary"
          >
            position in which the furniture is displayed
          </Chip>
          <div className=" md:flex justify-evenly mt-10 block ">
            <div className="flex md:mx-0 mx-auto justify-center">
              <div className="z-0">
                <Image
                  src="https://raw.githubusercontent.com/KDoman/CCS-Tools/main/public/norotationkindright.png"
                  alt="No rotation kind right"
                ></Image>
              </div>
              <div className="">
                <Chip
                  className="text-sm md:text-lg mb-2 rounded-lg"
                  color="primary"
                  variant="bordered"
                >
                  KIND RIGHT
                </Chip>
                <div className="block">
                  <Chip color="primary">X</Chip>
                  <Snippet
                    size="sm"
                    hideSymbol={true}
                    className="unselectable ml-2 mb-2"
                    variant="solid"
                    color="primary"
                  >
                    {((valueX * 2.54) / 2).toFixed(3)}
                  </Snippet>
                </div>
              </div>
            </div>

            <div className="flex md:flex-row-reverse justify-center">
              <div>
                <Image
                  src="https://raw.githubusercontent.com/KDoman/CCS-Tools/main/public/no-rotationkindleft.png"
                  alt="No rotation kind left"
                />
              </div>
              <div className="mr-4">
                <Chip
                  className="text-sm md:text-lg mb-2 float-right rounded-lg"
                  color="primary"
                  variant="bordered"
                >
                  KIND LEFT
                </Chip>
                <div className="block">
                  <Snippet
                    size="sm"
                    hideSymbol={true}
                    className="unselectable mr-2 mb-2"
                    variant="solid"
                    color="primary"
                  >
                    {((valueX * 2.54) / -2).toFixed(3)}
                  </Snippet>
                  <Chip color="primary">X</Chip>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        // ROTATION
        <>
          <Chip
            color="primary"
            className="text-lg md:text-xl mx-auto flex py-5 rounded-xl"
            variant="bordered"
          >
            Defaults (rotation)
          </Chip>
          <Chip
            className="flex mx-auto mt-2 text-sm md:text-md rounded-md"
            variant="flat"
            color="primary"
          >
            position in which the furniture is displayed
          </Chip>
          <div className="flex justify-center">
            <div className="grid grid-rows-2 grid-cols-2">
              <div className="row-start-1 row-end-3 my-auto">
                <Image
                  src="https://raw.githubusercontent.com/KDoman/CCS-Tools/main/public/rotation-kind-right.png"
                  alt="Rotation Kind Right"
                />
              </div>
              <div className="mt-10 ml-2">
                <Chip
                  className="text-sm md:text-lg mb-2 rounded-lg"
                  color="primary"
                  variant="bordered"
                >
                  KIND RIGHT
                </Chip>
                <div className="block">
                  <Chip color="primary">Z</Chip>
                  <Snippet
                    size="sm"
                    hideSymbol={true}
                    className="unselectable ml-2 mb-2"
                    variant="solid"
                    color="primary"
                  >
                    {((valueZ * 2.54) / -2).toFixed(3)}
                  </Snippet>
                </div>
              </div>
              <div className="mt-2 ml-2">
                <Chip
                  className="text-sm md:text-lg mb-2 rounded-lg"
                  color="primary"
                  variant="bordered"
                >
                  KIND LEFT
                </Chip>
                <div className="block">
                  <Chip color="primary">X</Chip>
                  <Snippet
                    size="sm"
                    hideSymbol={true}
                    className="unselectable ml-2 mb-2"
                    variant="solid"
                    color="primary"
                  >
                    {((valueX * 2.54) / -2).toFixed(3)}
                  </Snippet>
                </div>
              </div>
            </div>
            <div className="grid grid-rows-2 grid-cols-2">
              <div className=" row-start-1 row-end-3 my-auto">
                <Image
                  src="https://raw.githubusercontent.com/KDoman/CCS-Tools/main/public/rotation-kind-left.png"
                  alt="Rotation Kind Right"
                />
              </div>
              <div className="mt-10 row-start-1 col-start-1 ml-auto mr-2">
                <Chip
                  className="text-sm md:text-lg mb-2 float-right rounded-lg"
                  color="primary"
                  variant="bordered"
                >
                  KIND RIGHT
                </Chip>
                <div className="block">
                  <Snippet
                    size="sm"
                    hideSymbol={true}
                    className="unselectable mr-2 mb-2"
                    variant="solid"
                    color="primary"
                  >
                    {((valueX * 2.54) / 2).toFixed(3)}
                  </Snippet>
                  <Chip color="primary">X</Chip>
                </div>
              </div>
              <div className="mt-2 row-start-2 col-start-1 ml-auto mr-2">
                <Chip
                  className="text-sm md:text-lg mb-2 float-right rounded-lg"
                  color="primary"
                  variant="bordered"
                >
                  KIND LEFT
                </Chip>
                <div className="block">
                  <Snippet
                    size="sm"
                    hideSymbol={true}
                    className="unselectable mr-2 mb-2"
                    variant="solid"
                    color="primary"
                  >
                    {((valueZ * 2.54) / -2).toFixed(3)}
                  </Snippet>
                  <Chip color="primary">Z</Chip>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
