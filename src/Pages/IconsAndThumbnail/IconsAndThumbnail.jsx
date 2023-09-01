import { useContext } from "react";
import { Crop } from "./Crop/Crop";
import { FormContext } from "../../App";
import { Button, Chip } from "@nextui-org/react";

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
    <div className="ml-24 pt-10 min-h-screen">
      <Chip
        className="flex mx-auto mb-5  text-2xl py-6 md:text-3xl "
        variant="light"
      >
        Icon & Thumbnail generator
      </Chip>
      <Crop />
      <div className="flex justify-evenly mt-5">
        <Button
          onClick={() => downloadFileIcon(icon)}
          color="primary"
          className="text-lg font-semibold py-6"
        >
          <p>128 x 128</p>
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
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </Button>
        <Button
          className="text-lg font-semibold py-6"
          onClick={() => downloadFileThumbnail(thumbnail)}
          color="primary"
        >
          <p>512 x 512</p>
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
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}
