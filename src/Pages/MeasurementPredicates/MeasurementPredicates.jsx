import "./MeasurementPredicates.css";
import { PredicatesForm } from "./PredicatesForm";
import { useState } from "react";

export function MeasurementPredicates() {
  const [rowArray, setRowArray] = useState([]);
  const [text, setText] = useState("");

  const addRow = () => {
    setRowArray(rowArray, text);
  };

  return (
    <div className="measurement-predicates-container">
      <h1>MEASUREMENT PREDICATES TSV</h1>
      <PredicatesForm />
      <input type="text" onChange={(e) => setText(e.target.value)} />
      {text}
      <button onClick={addRow}>Add me</button>
      {rowArray}
    </div>
  );
}
