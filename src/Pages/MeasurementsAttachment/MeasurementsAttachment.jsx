import "./MeasurementsAttachment.css";
import { Form } from "./Form";
import { DefaultMeasurements } from "./DefaultMeasurements";
import { Defaults } from "./Defaults";
import { Chip } from "@nextui-org/react";

export function MeasurementsAttachment() {
  return (
    <>
      <Chip
        className="flex mx-auto my-5 text-xl py-6 md:text-4xl"
        color="primary"
        variant="shadow"
      >
        Enter measurements from Masterlist / Ticket
      </Chip>
      <Form />
      <DefaultMeasurements />
      <Defaults />
    </>
  );
}
