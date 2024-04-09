import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const FeaturePanel = () => {
  return (
    <div>
      <div className="flex items-center justify-around bg-black h-28 feature_panel">
        <div className="flex items-center justify-center w-full h-full border-l border-r border-l-black border-r-black bg-secondary">
          <div className="flex flex-col items-center gap-1 justify-content feature_panel__div ">
            <div className="flex items-start justify-start w-full feature_panel___div">
              <h2 className="text-[#6B6B6B] heading_second">01</h2>
            </div>
            <div className="flex items-center justify-center gap-4 feature_panel_div">
              <h2 className="text-white heading_second">We Stay connected</h2>
              <div className="flex items-center justify-center w-8 h-8 border border-[#FFE1E1] rounded-full p-2">
                <FaAngleRight className="text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-full border-l border-r border-l-black border-r-black bg-secondary">
          <div className="flex flex-col items-center gap-1 justify-content feature_panel__div">
            <div className="flex items-start justify-start w-full feature_panel___div">
              <h2 className="text-[#6B6B6B] heading_second">02</h2>
            </div>
            <div className="flex items-center justify-center gap-4 feature_panel_div">
              <h2 className="text-white heading_second">
                We believe in diversity & inclusion
              </h2>
              <div className="flex items-center justify-center w-8 h-8 border border-[#FFE1E1] rounded-full p-2">
                <FaAngleRight className="text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-full border-l border-r border-l-black border-r-black bg-secondary">
          <div className="flex flex-col items-center gap-1 justify-content feature_panel__div">
            <div className="flex items-start justify-start w-full feature_panel___div">
              <h2 className="text-[#6B6B6B] heading_second">03</h2>
            </div>
            <div className="flex items-center justify-center gap-4 feature_panel_div">
              <h2 className="text-white heading_second">
                We celebrate success
              </h2>
              <div className="flex items-center justify-center w-8 h-8 border border-[#FFE1E1] rounded-full p-2">
                <FaAngleRight className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturePanel;
