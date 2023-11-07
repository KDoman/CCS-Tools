import { Chip, Divider, Snippet } from "@nextui-org/react";
import { IMeasurementsValue } from "../Interface/MeasurementProps";

export function DefaultMeasurements({
  valueX,
  valueY,
  valueZ,
}: IMeasurementsValue) {
  return (
    <>
      <div className="py-10">
        <p className="text-center mb-5 text-3xl">Default measurements</p>
        <div className="flex justify-center items-center">
          <div>
            <div className="flex items-center mb-2">
              <p className="mr-2 font-semibold">X</p>
              <Snippet
                size="sm"
                hideSymbol={true}
                className="select-none"
                variant="solid"
                color="primary"
              >
                {(valueX * 2.54).toFixed(3)}
              </Snippet>
            </div>
            <div className="flex items-center mb-2">
              <p className="mr-2 font-semibold">Y</p>
              <Snippet
                size="sm"
                hideSymbol={true}
                className="select-none"
                variant="solid"
                color="primary"
              >
                {(valueY * 2.54).toFixed(3)}
              </Snippet>
            </div>
            <div className="flex items-center">
              <p className="mr-2 font-semibold">Z</p>
              <Snippet
                size="sm"
                hideSymbol={true}
                className="select-none"
                variant="solid"
                color="primary"
              >
                {(valueZ * 2.54).toFixed(3)}
              </Snippet>
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
}
