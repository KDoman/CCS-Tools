import { useContext } from "react";
import { FormContext } from "../../App";

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
      return -1;
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
    <div className="measurement-attachment-form-container">
      <label className="labelFullMeasurements" htmlFor="fullMeasurements">
        Full Measurements
      </label>
      <input
        type="text"
        placeholder="W x D x H"
        name="fullMeasurements"
        id="fullMeasurements"
        className="inputFullMeasurements"
        onChange={(e) => setFullValue(e.target.value)}
      />
      <button className="calc-button" onClick={() => calculateMeasurements()}>
        Calculate
      </button>
      <p>
        <b>Double Click!</b>
      </p>
      <div className="measurement-attachment-form-grid">
        <label className="labelX" htmlFor="attachmentX">
          W
        </label>
        <input
          type="number"
          name="attachmentX"
          id="attachmentX"
          placeholder="..."
          className="inputX"
          onChange={(e) => setValueX(e.target.value)}
        />
        <label className="labelY" htmlFor="attachmentY">
          H
        </label>
        <input
          type="number"
          name="attachmentY"
          id="attachmentY"
          placeholder="..."
          className="inputY"
          onChange={(e) => setValueY(e.target.value)}
        />

        <label className="labelZ" htmlFor="attachmentZ">
          D
        </label>
        <input
          type="number"
          name="attachmentZ"
          id="attachmentZ"
          placeholder="..."
          className="inputZ"
          onChange={(e) => setValueZ(e.target.value)}
        />
        <label htmlFor="checkBoxRotation">
          <b>Rotation?</b>
        </label>
        <input
          onChange={showDefaulsRotation}
          type="checkbox"
          name="checkBoxRotation"
          id="checkBoxRotation"
        />
      </div>
    </div>
  );
}
