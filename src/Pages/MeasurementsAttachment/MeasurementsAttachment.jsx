import "./MeasurementsAttachment.css";
import { Form } from "./Form";
import { DefaultMeasurements } from "./DefaultMeasurements";
import { Defaults } from "./Defaults";

export function MeasurementsAttachment() {
  return (
    <div className="MeasurementAttachment">
      <h1 className="h1Enter">Enter measurements from Masterlist / Ticket</h1>
      <Form />
      <DefaultMeasurements />
      <Defaults />
    </div>
  );
}
