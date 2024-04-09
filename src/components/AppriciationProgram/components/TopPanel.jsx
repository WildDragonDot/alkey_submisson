import React from "react";
import ap1 from "../../../assets/images/ap1.png"

const TopPanel = () => {
  return (
    <div className="flex items-center justify-center apriciation_panel_div">
      <div className="flex flex-col w-1/2 gap-4 p-16">
        <h1 className="font-extralight heading_font">Employee <span className="text-primary">Appreciation Program</span></h1>
        <p className="text-justify">
          Our Employee Appreciation Program is tailored to honor the ongoing
          commitment and efforts of our long-serving team members. Our 5 Year
          Club and 10 Year Club are special milestones within this program,
          celebrating employees who have dedicated half a decade or a full
          decade to our company mission. Each year, members of these clubs are
          invited to annual events held at select, memorable locations,
          reflecting our gratitude and recognition of their unwavering
          dedication. It's our way of saying thank you and ensuring that every
          significant chapter in our collective journey is celebrated with the
          grandeur it deserves
        </p>
      </div>
      <div className="w-1/2">
        <img src={ap1} alt="side panel" className="flex items-center justify-center" />
      </div>
    </div>
  );
};

export default TopPanel;
