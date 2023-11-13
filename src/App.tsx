import { Navbar } from "./Pages/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/HomePage";
import { MeasurementsAttachment } from "./Pages/MeasurementsAttachment/Components/MeasurementsAttachment";
import { IconsAndThumbnail } from "./Pages/IconsAndThumbnail/IconsAndThumbnail";
import { NextUIProvider } from "@nextui-org/react";
import { GhostRender } from "./Pages/Ghost/GhostRender";

function App() {
  return (
    <NextUIProvider>
      <div className="bg-zinc-50 ">
        <Router>
          <Navbar />

          <Routes>
            <Route path="/CCS-Tools/" element={<HomePage />} />
            <Route
              path="/MeasurementAttachment/"
              element={<MeasurementsAttachment />}
            />

            <Route path="/IconsAndThumbnail/" element={<IconsAndThumbnail />} />
            <Route path="/GhostRender/" element={<GhostRender />} />
          </Routes>
        </Router>
      </div>
    </NextUIProvider>
  );
}

export default App;
