import React from "react";
import logo_2 from "../../assets/images/logo_2.png";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="flex items-center justify-center footer_panel">
        <div className="flex items-center justify-center w-1/5 h-full">
          <img src={logo_2} alt="logo" className="w-1/2" />
        </div>
        <div className="w-1/5 border-l border-[#333] flex justify-center items-center flex-col px-4">
          <div className="flex flex-col items-start justify-start my-5">
            <h1 className="my-5 font-semibold text-white text-md">Expertise</h1>
            <ul className="flex flex-col gap-3 py-2">
              <li className="text-sm text-white cursor-pointer font-extralight hover:text-primary">
                Design
              </li>
              <li className="text-sm text-white cursor-pointer font-extralight hover:text-primary">
                Specialist Expertise
              </li>
              <li className="text-sm text-white cursor-pointer font-extralight hover:text-primary">
                Commercial Advice
              </li>
              <li className="text-sm text-white cursor-pointer font-extralight hover:text-primary">
                Traffic & Transport
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/5 border-l border-r border-[#333] flex justify-center items-center flex-col px-4">
          <div className="flex flex-col items-start justify-start my-5">
            <h1 className="my-5 font-semibold text-white text-md">Sectors</h1>
            <ul className="flex flex-col gap-3 py-2">
              <li className="text-sm text-white cursor-pointer font-extralight hover:text-primary">
                Road
              </li>
              <li className="text-sm text-white cursor-pointer font-extralight hover:text-primary">
                Tunner
              </li>
              <li className="text-sm text-white cursor-pointer font-extralight hover:text-primary">
                Bridge
              </li>
              <li className="text-sm text-white cursor-pointer font-extralight hover:text-primary">
                Others +
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center w-2/5 border-l border-[#333]">
          <div className="flex items-start justify-start w-full my-5">
            <div className="flex items-center justify-center w-1/2">
              <ul className="flex flex-col gap-3 py-2">
                <li className="font-semibold text-white cursor-pointer text-md hover:text-primary">
                  Our Business
                </li>
                <li className="font-semibold text-white cursor-pointer text-md hover:text-primary">
                  Work With Us
                </li>
                <li className="font-semibold text-white cursor-pointer text-md hover:text-primary">
                  Projects
                </li>
                <li className="font-semibold text-white cursor-pointer text-md hover:text-primary">
                  News
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center w-1/2">
              <ul className="flex flex-col gap-3 py-2">
                <li className="font-semibold text-white cursor-pointer text-md hover:text-primary">
                  Our Capabilities
                </li>
                <li className="font-semibold text-white cursor-pointer text-md hover:text-primary">
                  Engineers
                </li>
                <li className="font-semibold text-white cursor-pointer text-md hover:text-primary">
                  Contact
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between text-[#bbb] p-4 px-8 border-t border-[#333] footer_panel_last">
        <div>
          <p className="text-xs">
            2021 Case International. All right reserved.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div>
            <p className="text-xs cursor-pointer hover:text-primary">
              Terms & Condition
            </p>
          </div>
          <div>
            <p className="text-xs cursor-pointer hover:text-primary">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
