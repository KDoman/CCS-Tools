import { useState } from "react";
import "./IconsAndThumbnail.css";
import Resizer from "react-image-file-resizer";

export function IconsAndThumbnail() {
  const [icon, setIcon] = useState({});
  const [thumbnail, setThumbnail] = useState({});

  const resizeFileToIcon = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        128,
        128,
        "PNG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64",
        128,
        128
      );
    });

  const resizeFileToThumbnail = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        512,
        512,
        "PNG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64",
        512,
        512
      );
    });

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

  const onChange = async (event) => {
    try {
      const file = event.target.files;
      const imageThumbnail = await resizeFileToThumbnail(file[0]);
      const imageIcon = await resizeFileToIcon(file[0]);
      setIcon(imageIcon);
      setThumbnail(imageThumbnail);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="icon-div-container">
      <h1>Icon & Thumbnail generator</h1>
      <input
        type="file"
        name="icon-render"
        id="icon-render"
        className="file-upload"
        onChange={onChange}
      />
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
            <p>Download Icon</p>
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
            <p>Download Thumbnail</p>
          </button>
        </div>
      </div>
    </div>
  );
}
