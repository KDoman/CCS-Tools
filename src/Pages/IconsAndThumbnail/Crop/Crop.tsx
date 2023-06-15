import React, { useState, useRef } from "react";

import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
} from "../../../../node_modules/react-image-crop/dist";
import { canvasPreview } from "../../../../node_modules/react-image-crop/src/demo/canvasPreview";
import { useDebounceEffect } from "../../../../node_modules/react-image-crop/src/demo/useDebounceEffect";

import "../../../../node_modules/react-image-crop/src/ReactCrop.scss";
import "../../../../node_modules/react-image-crop/src/demo/index.scss";
import "../IconsAndThumbnail.css";

function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
        width: 50,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}
//@ts-ignore
export function Crop() {
  const [imgSrc, setImgSrc] = useState("");
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [crop, setCrop] = useState<Crop>();
  const hiddenAnchorRef = useRef<HTMLAnchorElement>(null);
  const blobUrlRef = useRef("");
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [aspect, setAspect] = useState<number | undefined>(1);

  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined);
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setImgSrc(reader.result?.toString() || "")
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  }

  function onDownloadCropClick() {
    if (!previewCanvasRef.current) {
      throw new Error("Crop canvas does not exist");
    }

    previewCanvasRef.current.toBlob((blob) => {
      if (!blob) {
        throw new Error("Failed to create blob");
      }
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
      }
      blobUrlRef.current = URL.createObjectURL(blob);
      hiddenAnchorRef.current!.href = blobUrlRef.current;
      hiddenAnchorRef.current!.click();
    });
  }

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate
        );
      }
    },
    100,
    [completedCrop, scale, rotate]
  );

  return (
    <div className="Crop-container">
      <div className="Crop-Controls">
        <input type="file" accept="image/*" onChange={onSelectFile} />
        <div className="crop-ranges-div">
          <div>
            <label htmlFor="scale-input">Scale: </label>
            <input
              id="scale-input"
              type="range"
              step="0.1"
              min={1}
              max={5}
              value={scale}
              disabled={!imgSrc}
              onChange={(e) => setScale(Number(e.target.value))}
            />
          </div>
          <div className="rotate-input-div">
            <label htmlFor="rotate-input">Rotate: </label>
            <input
              id="rotate-input"
              type="range"
              value={rotate}
              min={0}
              max={180}
              step={45}
              disabled={!imgSrc}
              onChange={(e) =>
                setRotate(Math.min(180, Math.max(-180, Number(e.target.value))))
              }
              list="markers"
            />
            <datalist id="markers">
              <option value="0" label="0"></option>
              <option value="45" label="45"></option>
              <option value="90" label="90"></option>
              <option value="135" label="135"></option>
              <option value="180" label="180"></option>
            </datalist>
          </div>
        </div>
      </div>
      <div className="image-crop-container">
        {!!imgSrc && (
          <ReactCrop
            crop={crop}
            onChange={(_, percentCrop) => setCrop(percentCrop)}
            onComplete={(c) => setCompletedCrop(c)}
            aspect={aspect}
            className="crop-img"
          >
            <img
              ref={imgRef}
              alt="Crop me"
              src={imgSrc}
              style={{
                transform: `scale(${scale}) rotate(${rotate}deg)`,
              }}
              onLoad={onImageLoad}
            />
          </ReactCrop>
        )}
        <div>
          {!!completedCrop && (
            <canvas
              ref={previewCanvasRef}
              style={{
                border: "1px solid black",
                objectFit: "contain",
                width: completedCrop.width,
                height: completedCrop.height,
              }}
            />
          )}
        </div>
      </div>
      <button
        className="calc-button button-crop download-button"
        onClick={onDownloadCropClick}
      >
        <img
          src="https://github.com/KDoman/CCS-Tools/blob/main/public/gear.png?raw=true"
          className="crop-img-btn"
        ></img>
        Set Image
      </button>
      <a
        ref={hiddenAnchorRef}
        download
        style={{
          position: "absolute",
          top: "-200vh",
          visibility: "hidden",
        }}
      ></a>
    </div>
  );
}
