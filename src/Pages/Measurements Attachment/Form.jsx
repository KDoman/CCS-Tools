import { useContext } from "react";
import { FormContext } from "../../App";

export function Form() {
  const { setValueX, setValueY, setValueZ, checked, setChecked } =
    useContext(FormContext);

  const showDefaulsRotation = () => {
    setChecked(!checked);
  };

  return (
    <div className="measurement-attachment-fomr-container">
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
  );
}
