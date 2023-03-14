import "./App.css";
import { Navbar } from "./Pages/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/HomePage";
import { MeasurementPredicates } from "./Pages/MeasurementPredicates/MeasurementPredicates";
import { MeasurementsAttachment } from "./Pages/Measurements Attachment/MeasurementsAttachment";
import { useState, createContext } from "react";

export const FormContext = createContext();

function App() {
  const [valueX, setValueX] = useState(0);
  const [valueY, setValueY] = useState(0);
  const [valueZ, setValueZ] = useState(0);
  const [checked, setChecked] = useState(false);
  return (
    <div className="App">
      <FormContext.Provider
        value={{
          valueX,
          setValueX,
          valueY,
          setValueY,
          valueZ,
          setValueZ,
          checked,
          setChecked,
        }}
      >
        <Router>
          <Navbar />
          <Routes>
            <Route path="/CCS-Tools/" element={<HomePage />} />
            <Route
              path="/MeasurementAttachment/"
              element={<MeasurementsAttachment />}
            />
            <Route
              path="/MeasurementPredicates/"
              element={<MeasurementPredicates />}
            />
          </Routes>
        </Router>
      </FormContext.Provider>
    </div>
  );
}

export default App;
