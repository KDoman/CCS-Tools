import { Link } from "react-router-dom";
import "./HomePage.css";

export function HomePage() {
  return (
    <div className="homepage-intro">
      <h1 className="homepage-title"> CSS TOOL PAGE </h1>

      <div className="homapage-card-container">
        <div className="homepage-card">
          <Link to="/MeasurementAttachment">
            <img
              className="imgCard"
              src="./assets/img/Measurement-Attachment-Card.png"
              alt="Measurement Attachmend Card img"
            />
          </Link>
          <h2 className="CardTitle">Measurement Attachment</h2>
        </div>
        {/* <div className="homepage-card"></div> */}
      </div>
    </div>
  );
}
