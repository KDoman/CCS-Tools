import { useContext } from "react";
import { FormContext } from "../../App";

export function Defaults() {
  const { valueX, valueZ, checked } = useContext(FormContext);
  return (
    <div>
      {!checked ? (
        // NO ROTATION
        <div>
          <h1 className="h1Defaults">Defaults (no rotation):</h1>
          <p className="pCenter">
            (position in which the furniture is displayed)
          </p>
          <div className="measurementAttachmentResult">
            <div className="defaultsNoRotation">
              <div>
                <img
                  src="CCS-Tools/public/Images/No-rotation-kind-right.png"
                  alt="No rotation kind right"
                />
              </div>
              <div className="defaultMeasurements">
                <h2>KIND RIGHT</h2>
                Defaults: <br />
                X: {((valueX * 2.54) / 2).toFixed(3)}
                <br />
                Y: 0
                <br />
                Z: 0
                <br />
              </div>
            </div>

            <div className="defaultsNoRotation">
              <div>
                <img
                  src="/CCS-Tools/public/Images/No-rotation-kind-left.png"
                  alt="No rotation kind left"
                />
              </div>
              <div className="defaultMeasurements">
                <h2>KIND LEFT</h2>
                Defaults: <br />
                X: {((valueX * 2.54) / -2).toFixed(3)}
                <br />
                Y: 0<br />
                Z: 0<br />
              </div>
            </div>
          </div>
        </div>
      ) : (
        // ROTATION
        <div>
          <h1 className="h1Defaults">Defaults (Rotation):</h1>
          <p className="pCenter">
            (position in which the furniture is displayed)
          </p>
          <div className="measurementAttachmentRotationContainer">
            <div className="measurementAttachmentResultRotation">
              <div className="cornerImgDiv">
                <img
                  src="./CCS-Tools/public/Images/Rotation-kind-right.png"
                  alt="Rotation Kind Right"
                  className="squareCornerImg"
                />
              </div>
              <div className="defaultsKinds">
                <h2>KIND RIGHT</h2>
                Defaults: <br />
                X: 0
                <br />
                Y: 0
                <br />
                Z: {((valueZ * 2.54) / -2).toFixed(3)}
                <br />
              </div>
              <div className="defaultsKinds">
                <h2>KIND LEFT</h2>
                Defaults: <br />
                X: {((valueX * 2.54) / -2).toFixed(3)}
                <br />
                Y: 0<br />
                Z: 0<br />
              </div>
            </div>
            <div className="measurementAttachmentResultRotation">
              <div className="cornerImgDiv">
                <img
                  src="/public/Images/Rotation-kind-left.png"
                  alt="Rotation Kind Left"
                  className="squareCornerImg"
                />
              </div>
              <div className="defaultsKinds">
                <h2>KIND RIGHT</h2>
                Defaults: <br />
                X: {((valueX * 2.54) / 2).toFixed(3)}
                <br />
                Y: 0
                <br />
                Z: 0
                <br />
              </div>
              <div className="defaultsKinds">
                <h2>KIND LEFT</h2>
                Defaults: <br />
                X: 0
                <br />
                Y: 0<br />
                Z: {((valueZ * 2.54) / -2).toFixed(3)}
                <br />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
