import { useContext } from "react";
import { FormContext } from "../../App";
import { Chip, Snippet } from "@nextui-org/react";

export function DefaultMeasurements() {
  const { valueX, valueY, valueZ } = useContext(FormContext);
  return (
    <div>
      <Chip
        className="mx-auto flex py-5 text-lg md:text-3xl mt-10"
        color="primary"
        variant="dot"
      >
        Default measurements:
      </Chip>
      <div className="flex justify-center">
        <div className="my-5">
          X
          <Snippet
            size="sm"
            hideSymbol={true}
            className="unselectable ml-2 mb-2"
            variant="solid"
            color="primary"
          >
            {(valueX * 2.54).toFixed(3)}
          </Snippet>
          <br />Y
          <Snippet
            size="sm"
            hideSymbol={true}
            className="unselectable ml-2 mb-2"
            variant="solid"
            color="primary"
          >
            {(valueY * 2.54).toFixed(3)}
          </Snippet>
          <br />Z
          <Snippet
            size="sm"
            hideSymbol={true}
            className="unselectable ml-2"
            variant="solid"
            color="primary"
          >
            {(valueZ * 2.54).toFixed(3)}
          </Snippet>
          <br />
        </div>
      </div>
    </div>
  );
}
