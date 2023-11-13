import { BaseSyntheticEvent } from "react";

interface InputProps {
  setObjSrc: (objSrc: string | null) => void;
}

const Input = ({ setObjSrc }: InputProps) => {
  const handleFileChange = (e: BaseSyntheticEvent) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      convertOBJtoDataURL(selectedFile);
    }
  };

  function convertOBJtoDataURL(objFile: File) {
    const reader = new FileReader();

    reader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        setObjSrc(event.target.result);
      }
    };

    reader.readAsDataURL(objFile);
  }

  return (
    <div className="flex justify-center">
      <input
        type="file"
        accept=".obj"
        onChange={handleFileChange}
        className="file:mr-4 file:py-2 file:px-4
        file:rounded-xl file:border-0
        file:font-semibold font-semibold
        file:bg-primary file:text-zinc-50
        hover:file:bg-slate-600 cursor-pointer border-2 p-3 rounded-xl mb-5 file:hover:cursor-pointer"
      />
    </div>
  );
};

export default Input;
