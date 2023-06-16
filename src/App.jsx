import "./App.css";
import { Navbar } from "./Pages/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/HomePage";
import { MeasurementPredicates } from "./Pages/MeasurementPredicates/MeasurementPredicates";
import { MeasurementsAttachment } from "./Pages/MeasurementsAttachment/MeasurementsAttachment";
import { useState, createContext } from "react";
import { IconsAndThumbnail } from "./Pages/IconsAndThumbnail/IconsAndThumbnail";

export const FormContext = createContext();

function App() {
  const [valueX, setValueX] = useState(0);
  const [valueY, setValueY] = useState(0);
  const [valueZ, setValueZ] = useState(0);
  const [checked, setChecked] = useState(false);
  const [valueXFullMeasurements, setValueXFullMeasurements] = useState(0);
  const [valueYFullMeasurements, setValueYFullMeasurements] = useState(0);
  const [valueZFullMeasurements, setValueZFullMeasurements] = useState(0);
  const [fullValue, setFullValue] = useState(" ");
  const [icon, setIcon] = useState({});
  const [thumbnail, setThumbnail] = useState({});
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
          valueXFullMeasurements,
          setValueXFullMeasurements,
          valueYFullMeasurements,
          setValueYFullMeasurements,
          valueZFullMeasurements,
          setValueZFullMeasurements,
          fullValue,
          setFullValue,
          icon,
          setIcon,
          thumbnail,
          setThumbnail,
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
            <Route path="/IconsAndThumbnail/" element={<IconsAndThumbnail />} />
          </Routes>
        </Router>
      </FormContext.Provider>
    </div>
  );
}

export default App;
