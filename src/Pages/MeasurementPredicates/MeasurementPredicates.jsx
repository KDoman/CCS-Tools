import "./MeasurementPredicates.css";
import { PredicatesForm } from "./PredicatesForm";
import { useState } from "react";

export function MeasurementPredicates() {
  const [rowArray, setRowArray] = useState([]);
  const [text, setText] = useState("");

  const addRow = () => {
    setRowArray(rowArray);
  };

  return (
    <div className="measurement-predicates-container">
      <h1>
        MEASUREMENT PREDICATES TSV <br></br>(in progress)
      </h1>
      <PredicatesForm />
      <input type="text" onChange={(e) => setText(e.target.value)} />
      {text}
      <button onClick={addRow}>Add me</button>
      {rowArray}
    </div>
  );
}
