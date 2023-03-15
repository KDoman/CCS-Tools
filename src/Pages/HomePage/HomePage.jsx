import { Link } from "react-router-dom";
import "./HomePage.css";

export function HomePage() {
  return (
    <div className="homepage-intro">
      <h1 className="homepage-title"> CCS TOOL PAGE </h1>

      <div className="homapage-card-container">
        <div className="homepage-card">
          <Link to="/MeasurementAttachment/">
            <img
              className="imgCard"
              src="./measurement-attachment-card.png"
              alt="Measurement Attachmend Card img"
            />
          </Link>
          <h2 className="CardTitle">Measurement Attachment</h2>
        </div>
        <div className="homepage-card">
          <Link to="/MeasurementPredicates/">
            <img
              className="imgCard"
              src="./in-progress.png"
              alt="Measurement Attachmend Card img"
            />
          </Link>
          <h2 className="CardTitle">
            Measurement Predicates <br />
            <sub>
              <i>(In progress)</i>
            </sub>
          </h2>
        </div>
      </div>
    </div>
  );
}
