import { useContext } from "react";
import { FormContext } from "../../App";

export function DefaultMeasurements() {
  const { valueX, valueY, valueZ } = useContext(FormContext);
  return (
    <div>
      <h1 className="h1DefaultMeasurements">Default measurements:</h1>
      <div className="measurementAttachmentResult">
        <div className="defaultMeasurements">
          X: {(valueX * 2.54).toFixed(3)}
          <br />
          Y: {(valueY * 2.54).toFixed(3)}
          <br />
          Z: {(valueZ * 2.54).toFixed(3)}
          <br />
        </div>
      </div>
    </div>
  );
}
