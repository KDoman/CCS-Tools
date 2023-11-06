import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className="ml-24 min-h-screen flex flex-col  justify-evenly">
      <div className="flex flex-col items-center">
        <Link to="/MeasurementAttachment/">
          <Card className=" bg-primary">
            <CardBody className="overflow-visible p-0 ">
              <Image
                src="./measurement-attachment-card.png"
                alt="Measurement Attachmend Card img"
                width={400}
                isZoomed
                className="w-full object-cover"
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
                className="w-full object-cover"
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
    </div>
  );
}
