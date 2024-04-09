import React from "react";
import { GoArrowRight } from "react-icons/go";
import Map from "../../assets/images/m1.png";

const MapArea = () => {
  return (
    <div className="my-28 mapArea_init">
      <div className="flex flex-col items-center justify-center w-full gap-8 mapArea">
        <div className="flex justify-center w-2/3 item-center">
          <h1 className="text-4xl font-semibold">
            As a <span className="text-primary">global business,</span> we
            encourage you to contact us no matter where you are located in the
            world.
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <p className="font-semibold text-md">
            Browse our job opportunities across the globe.
          </p>
        </div>
        <div className="flex items-center justify-center gap-5">
          <div>
            <h1 className="text-xl font-semibold text-primary">OPEN ROLES</h1>
          </div>
          <div className="flex items-center justify-center p-1 border rounded-full border-[#d9d9d9]">
            <GoArrowRight className="text-3xl text-primary" />
          </div>
        </div>
        <div className="mt-10">
          <img src={Map} alt="map" className="w-[90%]" />
        </div>
      </div>
    </div>
  );
};

export default MapArea;
