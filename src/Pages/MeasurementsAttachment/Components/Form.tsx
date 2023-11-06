import { Accordion, AccordionItem, Button, Input } from "@nextui-org/react";
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
    <div className="text-center">
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
            onClick={() => calculateMeasurements()}
            className="pt-6 pb-6 font-bold flex flex-col text-lg"
          >
            <p>Calculate</p>
          </Button>
        </div>
      )}

      <Accordion variant="bordered" className="max-w-sm mx-auto my-5">
        <AccordionItem
          title="Manual measurements"
          subtitle={
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
              <p className="ml-1">Optional</p>
            </div>
          }
          classNames={{ subtitle: "text-warning" }}
        >
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
        </AccordionItem>
      </Accordion>
    </div>
  );
}
