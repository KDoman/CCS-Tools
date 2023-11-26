import { Form } from "./Form";
import { DefaultMeasurements } from "./DefaultMeasurements";
import { Defaults } from "./Defaults";
import { useState } from "react";

export function MeasurementsAttachment() {
  const [valueX, setValueX] = useState(0);
  const [valueY, setValueY] = useState(0);
  const [valueZ, setValueZ] = useState(0);
  const [checked, setChecked] = useState(false);
  const [fullValue, setFullValue] = useState(" ");
  const [manualChecked, setManualChecked] = useState(false);
  const [valueXFullMeasurements, setValueXFullMeasurements] = useState(0);
  const [valueYFullMeasurements, setValueYFullMeasurements] = useState(0);
  const [valueZFullMeasurements, setValueZFullMeasurements] = useState(0);
  return (
    <div className="pt-10 min-h-screen">
      <p className="mb-5 text-5xl py-6  text-center">Measurements</p>
      <Form
        valueXFullMeasurements={valueXFullMeasurements}
        valueYFullMeasurements={valueYFullMeasurements}
        valueZFullMeasurements={valueZFullMeasurements}
        fullValue={fullValue}
        setValueX={setValueX}
        setValueY={setValueY}
        setValueZ={setValueZ}
        setValueXFullMeasurements={setValueXFullMeasurements}
        setValueYFullMeasurements={setValueYFullMeasurements}
        setValueZFullMeasurements={setValueZFullMeasurements}
        setFullValue={setFullValue}
        manualChecked={manualChecked}
        setManualChecked={setManualChecked}
      />
      <DefaultMeasurements valueX={valueX} valueY={valueY} valueZ={valueZ} />
      <Defaults
        valueX={valueX}
        valueY={valueY}
        valueZ={valueZ}
        setChecked={setChecked}
        checked={checked}
      />
    </div>
  );
}
