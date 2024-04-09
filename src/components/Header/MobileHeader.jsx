import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { RxCross1 } from "react-icons/rx";
import Logo from "../../assets/images/logo.png";

const MobileHeader = ({ isOpen, toggleDrawer }) => {
  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="left"
      className="bg-red-500 "
    >
      <div className="bg-secondary">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center justify-center">
            <p className="text-2xl text-[#ffffff] font-bold p-0 m-0 flex justify-start drop-shadow-lg">
              <img src={Logo} className="w-12 h-12" />
            </p>
          </div>
          <div className="flex items-center justify-center">
            <RxCross1
              className="p-1 text-4xl font-bold text-white bg-[#0000005d] rounded-full drop-shadow-lg"
              onClick={toggleDrawer}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-start mx-2 my-5">
        <ul className="flex flex-col gap-2">
          <li className="p-3 font-bold text-primary">
            <a href="/">PROJECTS</a>
          </li>
          <li className="p-3 text-primary">
            <a href="#" className="hover:text-[var(--color-primary)]">
              EXPERTISE
            </a>
          </li>
          <li className="p-3 text-primary">
            <a
              href="#"
              className="hover:text-[var(--color-primary)]"
            >
              ABOUT US
            </a>
          </li>
          <li className="p-3 text-primary">
            <a
              href="#"
              className="hover:text-[var(--color-primary)]"
            >
              PEOPLE
            </a>
          </li>
          <li className="p-3 text-primary">
            <a href="#" className="hover:text-[var(--color-primary)]">
              CAREERS
            </a>
          </li>
        </ul>
      </div>
    </Drawer>
  );
};

export default MobileHeader;
