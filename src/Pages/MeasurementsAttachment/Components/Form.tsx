import { Button, Input, Switch, Divider } from "@nextui-org/react";
import { IInputMeasurement } from "../Interface/MeasurementProps";

export function Form({
  setValueX,
  setValueY,
  setValueZ,
  valueXFullMeasurements,
  setValueXFullMeasurements,
  valueYFullMeasurements,
  setValueYFullMeasurements,
  valueZFullMeasurements,
  setValueZFullMeasurements,
  fullValue,
  setFullValue,
  manualChecked,
  setManualChecked,
}: IInputMeasurement) {
  const arrMeasurementsSplit = fullValue.toLowerCase().split("x");

  const findLetter = (
    array: string[],
    letter: string,
    callback: (val: number) => void
  ) => {
    array.forEach((word: string) => {
      if (word.includes(letter)) {
        const match = word.match(/[\d\.]+/);
        if (match) {
          const convertion = parseFloat(match[0]);
          callback(convertion);
        }
      }
    });
  };

  const calculateMeasurements = () => {
    findLetter(arrMeasurementsSplit, "w", setValueXFullMeasurements),
      findLetter(arrMeasurementsSplit, "d", setValueZFullMeasurements),
      findLetter(arrMeasurementsSplit, "h", setValueYFullMeasurements),
      setValueX(valueXFullMeasurements);
    setValueY(valueYFullMeasurements);
    setValueZ(valueZFullMeasurements);
  };

  return (
    <>
      {fullValue.includes("/") ? (
        <div className="flex justify-center">
          <Input
            type="text"
            label="Full Measurements"
            className="max-w-xs my-5 inline-block mr-5"
            onChange={(e) => setFullValue(e.target.value)}
            variant="bordered"
            validationState="invalid"
            errorMessage="Use decimals instead of fractions (1/2 ---> 0.5)"
          />
          <Button
            color="primary"
            isDisabled
            className="mt-6 pt-6 pb-6 font-bold  flex flex-col text-lg"
          >
            <p>Calculate</p>
          </Button>
        </div>
      ) : (
        <div className="flex justify-center items-center ">
          <Input
            type="text"
            label="Full Measurements"
            onChange={(e) => setFullValue(e.target.value)}
            className="max-w-xs my-5 inline-block mr-5"
            name="fullMeasurements"
            id="fullMeasurements"
          />
          <Button
            color="primary"
            onClick={calculateMeasurements}
            className="pt-6 pb-6 font-bold flex flex-col text-lg"
          >
            <p>Calculate</p>
          </Button>
        </div>
      )}
      <div className="flex justify-center mt-10">
        <p className="mr-5 font-semibold">MANUAL MEASUREMENTS</p>
        <Switch
          onChange={() => setManualChecked(!manualChecked)}
          size="lg"
          name="checkBoxRotation"
          id="checkBoxRotation"
        />
      </div>

      {manualChecked && (
        <div className="mt-5">
          <Input
            label="W"
            type="number"
            name="attachmentX"
            id="attachmentX"
            className="max-w-xs mx-auto mt-2"
            onChange={(e) => setValueX(parseFloat(e.target.value))}
          />

          <Input
            label="H"
            type="number"
            name="attachmentY"
            id="attachmentY"
            className="max-w-xs mx-auto mt-10"
            onChange={(e) => setValueY(parseFloat(e.target.value))}
          />

          <Input
            label="D"
            type="number"
            name="attachmentZ"
            id="attachmentZ"
            className="max-w-xs mx-auto my-10"
            onChange={(e) => setValueZ(parseFloat(e.target.value))}
          />
        </div>
      )}
      <Divider className="mt-10" />
    </>
  );
}
