import { Form } from "./Form";
import { DefaultMeasurements } from "./DefaultMeasurements";
import { Defaults } from "./Defaults";
import { Chip } from "@nextui-org/react";

export function MeasurementsAttachment() {
  return (
    <div className="ml-24 pt-10 min-h-screen">
      <Chip
        className="flex mx-auto mb-5  text-2xl py-6 md:text-3xl "
        variant="light"
      >
        Enter measurements from Masterlist / Ticket
      </Chip>
      <Form />
      <DefaultMeasurements />
      <Defaults />
    </div>
  );
}
