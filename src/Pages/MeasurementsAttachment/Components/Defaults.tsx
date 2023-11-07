import { Chip, Image, Snippet, Switch } from "@nextui-org/react";
import { IDefaults } from "../Interface/MeasurementProps";
import ModalInfo from "./ModalInfo";

export function Defaults({ valueX, valueZ, checked, setChecked }: IDefaults) {
  const showDefaulsRotation = () => {
    setChecked(!checked);
  };
  return (
    <div>
      <p className="mb-5 text-3xl mt-10 flex align-center justify-center">
        Defaults <ModalInfo />
      </p>
      <div className="flex justify-center items-center">
        <p className="mr-4 font-semibold">ROTATION </p>
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
          <div className="md:flex md:justify-center mt-10">
            <div className="md:grid md:grid-rows-2 md:grid-cols-2 flex justify-center">
              <div className="row-start-1 row-end-3 my-auto">
                <Image
                  src="https://raw.githubusercontent.com/KDoman/CCS-Tools/main/public/rotation-kind-right.png"
                  alt="Rotation Kind Right"
                />
              </div>
              <div className="md:mt-10 mt-16 ml-2">
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
              <div className="md:mt-2 mt-16 ml-2">
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
            <div className="md:grid md:grid-rows-2 md:grid-cols-2 flex justify-center">
              <div className="row-start-1 row-end-3 my-auto">
                <Image
                  src="https://raw.githubusercontent.com/KDoman/CCS-Tools/main/public/rotation-kind-left.png"
                  alt="Rotation Kind Right"
                />
              </div>
              <div className="md:mt-10 mt-16 md:row-start-1 md:col-start-1 md:ml-auto mr-2">
                <Chip
                  className="text-sm md:text-lg mb-2 md:float-right rounded-lg"
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
                  <Chip
                    color="primary"
                    className="float-left md:float-none mt-1 mr-2 md:m-0"
                  >
                    X
                  </Chip>
                </div>
              </div>
              <div className="md:mt-2 mt-16 md:row-start-2 md:col-start-1 md:ml-auto mr-2">
                <Chip
                  className="text-sm md:text-lg mb-2 md:float-right rounded-lg"
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
                  <Chip
                    color="primary"
                    className="float-left md:float-none mt-1 mr-2 md:m-0"
                  >
                    Z
                  </Chip>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
