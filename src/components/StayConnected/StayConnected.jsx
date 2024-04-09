import React from "react";
import RightSidePanel from "./components/RightSidePanel";
import LeftSidePanel from './components/LeftSidePanel';



const StayConnected = () => {
  return (
    <div className="flex items-start justify-center stay_connected">
      <LeftSidePanel />
      <RightSidePanel />
    </div>
  );
};

export default StayConnected;
