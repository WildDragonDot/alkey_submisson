import React from "react";
import ap21 from "../../../assets/images/ap21.png";
import ap22 from "../../../assets/images/ap22.png";
import ap3 from "../../../assets/images/ap3.png";

const BottomPanel = () => {
  return (
    <div className="flex items-start justify-center w-full gap-4 px-6 apriciation_panel_div2">
      <div className="w-1/3 h-full ">
        <img src={ap21} alt="side panel" className="object-cover w-full h-80" />
      </div>
      <div className="w-1/3 h-full ">
        <img src={ap22} alt="side panel" className="object-cover w-full h-80" />
      </div>
      <div className="w-1/3 h-full ">
        <img src={ap3} alt="side panel" className="object-cover w-full h-80" />
      </div>
    </div>
  );
};

export default BottomPanel;
