import Scene from "./Components/Scene";
import Input from "./Components/Input";
import { useState } from "react";
import { Divider, Spinner } from "@nextui-org/react";

export const GhostRender = () => {
  const [objSrc, setObjSrc] = useState<string | null>(null);
  const [isRaf, setIsRaf] = useState<boolean>(false);

  return (
    <div className=" pt-10 min-h-screen">
      <p className="mb-5 text-5xl py-6 text-center ">Ghost generator</p>
      <Input setObjSrc={setObjSrc} />
      <Divider className="mb-10 mt-5" />
      {objSrc ? (
        <Scene objSrc={objSrc} isRaf={isRaf} setIsRaf={setIsRaf} />
      ) : (
        <Spinner label="Select File..." className="mx-auto w-full" />
      )}
      <Divider className="my-10" />
    </div>
  );
};
