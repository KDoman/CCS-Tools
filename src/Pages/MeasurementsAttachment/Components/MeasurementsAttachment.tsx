import { Form } from "./Form";
import { DefaultMeasurements } from "./DefaultMeasurements";
import { Defaults } from "./Defaults";
import { Chip } from "@nextui-org/react";
import { useState } from "react";

export function MeasurementsAttachment() {
  const [valueX, setValueX] = useState(0);
  const [valueY, setValueY] = useState(0);
  const [valueZ, setValueZ] = useState(0);
  const [checked, setChecked] = useState(false);
  const [valueXFullMeasurements, setValueXFullMeasurements] = useState(0);
  const [valueYFullMeasurements, setValueYFullMeasurements] = useState(0);
  const [valueZFullMeasurements, setValueZFullMeasurements] = useState(0);
  const [fullValue, setFullValue] = useState(" ");
  return (
    <div className="ml-24 pt-10 min-h-screen">
      <Chip
        className="flex mx-auto mb-5  text-2xl py-6 md:text-3xl "
        variant="light"
      >
        Enter measurements from Masterlist / Ticket
      </Chip>
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
