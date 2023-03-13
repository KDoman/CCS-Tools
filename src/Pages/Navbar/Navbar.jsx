import "./Navbar.css";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="navbar">
      <img className="logo" src="./ccs-tools.png" alt="CCS-TOOLS Logo"></img>
      <div className="navbar-list">
        <ul>
          <li>
            <button>
              <Link className="link" to="/CCS-Tools">
                Home Page
              </Link>
            </button>
          </li>
          <li>
            <button>
              <Link className="link" to="/MeasurementAttachment">
                Measurement Attachment
              </Link>
            </button>
          </li>
          <li>
            <button>
              <Link className="link" to="/MeasurementPredicates">
                Measurement Predicates
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
