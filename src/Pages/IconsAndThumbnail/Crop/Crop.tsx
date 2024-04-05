import React, { useState, useRef } from "react";

import {
  Crop,
  PixelCrop,
} from "../../../../node_modules/react-image-crop/dist";
import { canvasPreview } from "./CanvasPrev";
import { useDebounceEffect } from "../../../../node_modules/react-image-crop/src/demo/useDebounceEffect";

import "../../../../node_modules/react-image-crop/src/ReactCrop.scss";
import "../../../../node_modules/react-image-crop/src/demo/index.scss";
import Resizer from "react-image-file-resizer";
import {
  Button,
  Divider,
  Input,
  Progress,
  Slider,
  Spinner,
} from "@nextui-org/react";
import axios from "axios";
import { centerAspectCrop } from "../../../Services/Crop/crop-services";
import ErrorComponentMessage from "./Components/ErrorComponentMessage";
import DisplayReactCrop from "./Components/DisplayReactCrop";
import { log } from "console";

interface Props {
  setThumbnail: (value: string) => void;
  setIcon: (value: string) => void;
}

//@ts-ignore
export function Crop({ setThumbnail, setIcon }: Props) {
  const [transparentBg, setTransparentBg] = useState<boolean>(true);
  const [inputImgValue, setInputImgValue] = useState<null | EventTarget>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const aspect: number = 1;
  const blobUrlRef = useRef("");
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [crop, setCrop] = useState<Crop>();
  const [imgSrc, setImgSrc] = useState("");
  const imgRef = useRef<HTMLImageElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const [scale, setScale] = useState(1);
  // feature rotate option (in case if needed)
  // const [rotate, setRotate] = useState<number>(0);

  async function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    setScale(1);
    setError("");
    setIsLoading(true);
    if (e.target.files && e.target.files.length > 0) {
      setInputImgValue(e.target);
      setCrop(undefined);
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setImgSrc(reader.result?.toString() || "")
      );
      reader.readAsDataURL(e.target.files[0]);
    }
    setIsLoading(false);
    setIcon("");
    setThumbnail("");
  }

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    const { width, height } = e.currentTarget;
    setCrop(centerAspectCrop(width, height, aspect));
  }

  async function getImgFromUrl(url: string) {
    setScale(1);
    setError("");
    setIsLoading(true);
    setCrop(undefined);
    const imgURL: string = extractImageUrl(url);
    return axios
      .get(imgURL, { responseType: "arraybuffer" })
      .then((response) => {
        let image = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        setImgSrc(
          `data:${response.headers[
            "content-type"
          ].toLowerCase()};base64,${image}`
        );
      })
      .catch(() => setError("Something went wrong. Make sure URL is okey ;)"))
      .finally(() => setIsLoading(false));
  }

  function extractImageUrl(inputUrl: string) {
    try {
      const url = new URL(inputUrl);
      if (url.href) {
        return url.href;
        // } else if (url.href.includes("cdn") && url.href.includes(".png")) {
        //   const cdnIndex = inputUrl.indexOf("cdn");
        //   const pngIndex = inputUrl.indexOf(".png");
        //   if (cdnIndex !== -1 && pngIndex !== -1 && cdnIndex < pngIndex) {
        //     const extractedUrl = inputUrl.substring(cdnIndex, pngIndex + 4);
        //     console.log(`https://${extractedUrl}`);

        //     return `https://${extractedUrl}`;
        //   }
      }
    } catch (error) {
      console.error("Invalid URL:", error);
    }
    return "";
  }

  const resizeFileToIcon = (file: Blob) =>
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

  const resizeFileToThumbnail = (file: Blob) =>
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

  function setCropImage() {
    if (!previewCanvasRef.current) {
      throw new Error("Select file!");
    }

    previewCanvasRef.current.toBlob((blob) => {
      if (!blob) {
        throw new Error("Failed to create blob");
      }
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
      }

      const canvasURL = previewCanvasRef.current?.toDataURL();

      if (canvasURL)
        fetch(canvasURL)
          .then((res) => res.blob())
          .then((blob) => {
            const file = new File([blob], "image", { type: blob.type });

            resizeFileToThumbnail(file).then((res) => {
              if (res) setThumbnail(res as string);
            });
            resizeFileToIcon(file).then((res) => {
              if (res) setIcon(res as string);
            });
          })
          .catch((err) => console.log(err));
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
          transparentBg
          // rotate (in case rotation is needed)
        );
      }
    },
    100,
    [completedCrop, scale, imgSrc, transparentBg] //rotate] (in case rotation is needed)]
  );

  const toggleTransparentBg = () => {
    setIcon("");
    setThumbnail("");
    setTransparentBg((current) => !current);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <>
        <input
          type="file"
          accept="image"
          onChange={onSelectFile}
          className="file:mr-4 file:py-2 file:px-4
          max-w-[300px]
          file:rounded-xl file:border-0
           file:font-semibold font-semibold
          file:bg-primary file:text-zinc-50
          hover:file:bg-slate-600  cursor-pointer border-2 p-3 rounded-xl file:hover:cursor-pointer"
        />
        <Divider className="max-w-[300px] my-3" />
        <Input
          type="text"
          label="Paste URL"
          className="max-w-[300px]"
          variant="bordered"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            getImgFromUrl(e.target.value);
            setInputImgValue(null);
          }}
          isClearable
          onClear={() => {
            setInputValue("");
            getImgFromUrl("");
          }}
          ref={inputRef}
        />
        <Slider
          size="md"
          step={0.1}
          color="primary"
          label="Scale"
          showSteps={true}
          maxValue={3}
          minValue={0}
          defaultValue={scale}
          value={scale}
          className="max-w-[300px] mt-10"
          onChange={(e) => setScale(Number(e))}
        />

        {/* 
           in case rotation is needed
          <div>
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
              className="bg-primary"
            />
          </div> */}
      </>
      <Divider className="my-10 " />

      {!inputValue && !inputImgValue ? (
        <Spinner label="Select file or paste URL" />
      ) : (
        <>
          {error ? (
            <ErrorComponentMessage error={error} />
          ) : (
            <>
              {isLoading ? (
                <>
                  <p className="mb-4">Loading...</p>
                  <Progress
                    isIndeterminate
                    aria-label="loading"
                    className="max-w-md"
                    size="sm"
                  />
                </>
              ) : (
                <DisplayReactCrop
                  imgRef={imgRef}
                  imgSrc={imgSrc}
                  crop={crop}
                  setCrop={setCrop}
                  setCompletedCrop={setCompletedCrop}
                  scale={scale}
                  onImageLoad={onImageLoad}
                  toggleTransparentBg={toggleTransparentBg}
                  completedCrop={completedCrop}
                  previewCanvasRef={previewCanvasRef}
                  aspect={aspect}
                />
              )}
            </>
          )}
        </>
      )}
      <Divider className="my-10" />

      <Button
        color="primary"
        onClick={setCropImage}
        className="mt-5 py-6"
        isDisabled={!imgSrc}
      >
        <p className="text-lg font-semibold">Set Image</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </Button>
    </div>
  );
}
