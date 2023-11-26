import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <>
      <h1 className="text-center pt-16 mb-16">
        <p className="text-8xl">CCS</p>
        <p className="text-5xl bg-primary text-zinc-50 rounded-lg max-w-[200px] mx-auto">
          Tools
        </p>
      </h1>
      <div className=" min-h-screen grid grid-cols-3">
        <div className="flex flex-col items-center">
          <Link to="/MeasurementAttachment/">
            <Card className=" bg-primary">
              <CardBody className="overflow-visible p-0 ">
                <Image
                  src="./measurement-attachment-card.png"
                  alt="Measurement Attachmend Card img"
                  width={400}
                  isZoomed
                  className="w-full h-[290px] object-contain"
                ></Image>
              </CardBody>
              <CardFooter className="text-small justify-between">
                <p className="font-bold text-large text-zinc-50">
                  Measurement Attachment
                </p>
              </CardFooter>
            </Card>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <Link to="/IconsAndThumbnail/">
            <Card className=" bg-primary">
              <CardBody className="overflow-visible p-0 ">
                <Image
                  src="./Icon-thumbnail-renderer.png"
                  alt="Icon and Thumbnail img"
                  width={400}
                  isZoomed
                  className="w-full h-[290px] object-contain"
                ></Image>
              </CardBody>
              <CardFooter className="text-small justify-between">
                <p className="font-bold text-large text-zinc-50">
                  Icon & Thumbnail generator
                </p>
              </CardFooter>
            </Card>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <Link to="/IconsAndThumbnail/">
            <Card className=" bg-primary">
              <CardBody className="overflow-visible p-0 ">
                <Image
                  src="./ghost-generator.png"
                  alt="Ghost generator for sectional builder"
                  width={400}
                  isZoomed
                  className="w-full h-[290px] object-contain max"
                ></Image>
              </CardBody>
              <CardFooter className="text-small justify-between">
                <p className="font-bold text-large text-zinc-50">
                  Ghost Generator (testing)
                </p>
              </CardFooter>
            </Card>
          </Link>
        </div>
      </div>
    </>
  );
}
