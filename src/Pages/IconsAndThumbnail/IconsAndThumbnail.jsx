import { useContext, useState } from "react";
import "./IconsAndThumbnail.css";
import { Crop } from "./Crop/Crop";
import { FormContext } from "../../App";

export function IconsAndThumbnail() {
  const { icon, thumbnail } = useContext(FormContext);

  //@ts-ignore
  const downloadFileIcon = async (fileUri) => {
    const name = `${"Icon_128x128_" + (Math.random() * 1000000).toFixed(0)}`;
    try {
      const response = await fetch(fileUri);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Wystąpił błąd podczas pobierania pliku:", error);
    }
  };

  //@ts-ignore
  const downloadFileThumbnail = async (fileUri) => {
    const name = `${
      "Thumbnail_512x512_" + (Math.random() * 1000000).toFixed(0)
    }`;
    try {
      const response = await fetch(fileUri);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Wystąpił błąd podczas pobierania pliku:", error);
    }
  };

  return (
    <div className="icon-div-container">
      <h1>Icon & Thumbnail generator</h1>
      <Crop />
      <div className="rendered-img-container">
        <div className="rendered-img-div">
          <button
            onClick={() => downloadFileIcon(icon)}
            className="calc-button no-margin"
          >
            <img
              src="https://github.com/KDoman/CCS-Tools/blob/main/public/download.png?raw=true"
              alt="download icon"
            ></img>
            <p>128 x 128</p>
          </button>
        </div>
        <div className="rendered-img-div">
          <button
            className="calc-button no-margin"
            onClick={() => downloadFileThumbnail(thumbnail)}
          >
            <img
              src="https://github.com/KDoman/CCS-Tools/blob/main/public/download.png?raw=true"
              alt="download icon"
            ></img>
            <p>512 x 512</p>
          </button>
        </div>
      </div>
    </div>
  );
}
