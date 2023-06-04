import "./Navbar.css";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="navbar">
      <img className="logo" src="./ccs-tools.png" alt="CCS-TOOLS Logo"></img>
      <div className="navbar-list">
        <ul>
          <li>
            <Link className="link" to="/CCS-Tools/">
              <button>Home Page</button>
            </Link>
          </li>
          <li>
            <Link className="link" to="/MeasurementAttachment/">
              <button>Measurement Attachment</button>
            </Link>
          </li>
          <li>
            <Link className="link" to="/IconsAndThumbnail/">
              <button>Icon & Thumbnail</button>
            </Link>
          </li>
          <li>
            <Link className="link" to="/MeasurementPredicates/">
              <button>Measurement Predicates</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
