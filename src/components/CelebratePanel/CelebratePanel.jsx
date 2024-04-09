import React from "react";
import g1 from "../../assets/images/g1.png";
import g2 from "../../assets/images/g2.png";
import g3 from "../../assets/images/g3.png";
import g4 from "../../assets/images/g4.png";
import g5 from "../../assets/images/g5.png";

const CelebratePanel = () => {
  return (
    <div className="px-6 mt-24 celebraty_panel">
      <div className="flex items-start justify-center w-full gap-2">
        <div className="w-4/5 overflow-hidden">
          <div className="flex items-center justify-center">
            <img src={g1} className="w-full h-full" />
            <img className="w-full h-full" src={g2} />
          </div>
        </div>
        <div className="relative inset-0 w-1/5 z-11">
          <img className="w-full" src={g3} />
        </div>
      </div>
      <div className="flex items-start justify-center w-full celebraty_panel_div">
        <div className="relative flex items-center justify-center w-1/3 celebraty_panel__div">
          <div
            className="absolute flex flex-col gap-3"
            style={{ top: "-28rem" }}
          >
            <h1 className="font-extralight heading_font">
              We celebrate <span className="text-primary">success</span>
            </h1>
            <div className="flex flex-col gap-2 text-justify">
              <p>
                At CaSE we understand that every achievement, big or small, is a
                result of the hard work and dedication of our team members. We
                take pride in celebrating these moments because they underscore
                the commitment and effort put into each project.
              </p>
              <p>
                Some of our favourite events on the calendar include our coveted
                Melbourne Cup event and our always amazing Christmas Party.
                In-between, our team celebrate together during team cycling
                events, regular team dinners and social morning teas to
                celebrate milestones and special days. Taking the time to
                celebrate wins is our way of showing gratitude and ensuring
                everyone knows their efforts make a difference.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex items-end justify-end w-full gap-2 mt-2">
        <div className="absolute inset-0 w-1/5 z-11" style={{ top: "-29rem" }}>
          <img className="object-cover w-full h-full" src={g3} />
        </div>
        <div className="w-4/5">
          <img className="w-full pl-2" src={g5} />
        </div>
      </div>
    </div>
  );
};

export default CelebratePanel;
