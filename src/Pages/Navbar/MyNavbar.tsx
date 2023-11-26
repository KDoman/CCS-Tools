import { Tabs, Tab, Image, Navbar, Card } from "@nextui-org/react";
import { NavLink } from "react-router-dom";

export function MyNavbar() {
  return (
    <Navbar>
      <Image
        src="./ccs-tools.png"
        width={96}
        isBlurred
        className="bg-inherit"
      ></Image>

      <Tabs
        variant="underlined"
        color="primary"
        classNames={{
          tabList:
            "gap-6 w-full relative rounded-none p-0 border-b border-divider ",
          tab: "max-w-max px-0 h-12",
          panel: "hidden",
        }}
      >
        <Tab>
          <NavLink to="/CCS-Tools/" className="py-4">
            Home Page
          </NavLink>
        </Tab>
        <Tab>
          <NavLink to="/MeasurementAttachment/" className="py-4">
            Measurement Attachment
          </NavLink>
        </Tab>
        <Tab>
          <NavLink to="/IconsAndThumbnail/" className="py-4">
            Icon and Thumbnail
          </NavLink>
        </Tab>
        <Tab>
          <NavLink to="/GhostRender/" className="py-4">
            Ghost Generator
          </NavLink>
        </Tab>
      </Tabs>
    </Navbar>
  );
}
