import { useContext } from "react";
import { FormContext } from "../../App";
import { Button, Chip, Input, Switch } from "@nextui-org/react";

export function Form() {
  const {
    setValueX,
    setValueY,
    setValueZ,
    checked,
    setChecked,
    valueXFullMeasurements,
    setValueXFullMeasurements,
    valueYFullMeasurements,
    setValueYFullMeasurements,
    valueZFullMeasurements,
    setValueZFullMeasurements,
    fullValue,
    setFullValue,
  } = useContext(FormContext);

  const showDefaulsRotation = () => {
    setChecked(!checked);
  };

  const arrMeasurementsSplit = fullValue.toLowerCase().split("x");

  const findLetter = (array, letter, val) => {
    array.forEach((word) => {
      if (word.includes(letter)) {
        const match = word.match(/[\d\.]+/);
        const convertion = parseFloat(match);
        val(convertion);
      }
      return;
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
    <div className="text-center">
      <div className="flex justify-center items-center">
        <Input
          type="text"
          label="Full Measurements"
          onChange={(e) => setFullValue(e.target.value)}
          className="max-w-xs my-5 inline-block mr-5"
          name="fullMeasurements"
          id="fullMeasurements"
          placeholder=""
        />
        <Button
          color="primary"
          variant="ghost"
          onClick={() => calculateMeasurements()}
          className=""
        >
          Calculate
        </Button>
        <b className="ml-2">Double Click!</b>
      </div>
      <>
        <Chip
          className="text-lg md:text-3xl mt-10 py-5"
          variant="dot"
          color="primary"
        >
          Manual measurements
        </Chip>
        <p className="text-center text-md mt-2 md:text-lg">(Optional)</p>
        <Input
          label="W"
          type="number"
          name="attachmentX"
          id="attachmentX"
          className="max-w-xs mx-auto mt-2"
          onChange={(e) => setValueX(e.target.value)}
        />

        <Input
          label="H"
          type="number"
          name="attachmentY"
          id="attachmentY"
          className="max-w-xs mx-auto mt-10"
          onChange={(e) => setValueY(e.target.value)}
        />

        <Input
          label="D"
          type="number"
          name="attachmentZ"
          id="attachmentZ"
          className="max-w-xs mx-auto my-10"
          onChange={(e) => setValueZ(e.target.value)}
        />
        <label htmlFor="checkBoxRotation" className="mr-5">
          <b>ROTATION</b>
        </label>
        <Switch
          onChange={showDefaulsRotation}
          size="lg"
          name="checkBoxRotation"
          id="checkBoxRotation"
        />
      </>
    </div>
  );
}
