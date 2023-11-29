import { Checkbox, Spinner } from "@nextui-org/react";
import { LegacyRef } from "react";
import ReactCrop, { Crop, PercentCrop, PixelCrop } from "react-image-crop";

interface Props {
  imgSrc: string;
  crop?: Crop;
  setCrop: (value: PercentCrop) => void;
  setCompletedCrop: (value: PixelCrop) => void;
  imgRef: LegacyRef<HTMLImageElement>;
  scale: number;
  onImageLoad: (e: React.SyntheticEvent<HTMLImageElement>) => void;
  toggleTransparentBg: () => void;
  completedCrop?: PixelCrop;
  previewCanvasRef: LegacyRef<HTMLCanvasElement>;
  aspect: number;
}

const DisplayReactCrop = ({
  imgSrc,
  crop,
  setCrop,
  setCompletedCrop,
  imgRef,
  scale,
  onImageLoad,
  toggleTransparentBg,
  completedCrop,
  previewCanvasRef,
  aspect,
}: Props) => {
  return (
    <>
      {!!imgSrc ? (
        <>
          <div className="  w-full flex justify-evenly bg-slate-200">
            <ReactCrop
              crop={crop}
              onChange={(_, percentCrop) => setCrop(percentCrop)}
              onComplete={(c) => setCompletedCrop(c)}
              aspect={aspect}
              className="max-w-2xl"
            >
              <img
                ref={imgRef}
                alt="Crop me"
                src={imgSrc}
                style={{
                  transform: `scale(${scale})`,
                  //  in case rotation is needed ==> `transform(${rotate})`
                }}
                onLoad={onImageLoad}
              />
            </ReactCrop>
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
          <Checkbox className="font-bold mt-5" onClick={toggleTransparentBg}>
            White Background
          </Checkbox>
        </>
      ) : (
        <Spinner label="Select file or paste URL" />
      )}
    </>
  );
};

export default DisplayReactCrop;
