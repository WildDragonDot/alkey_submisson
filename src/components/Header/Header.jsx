import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [shadow, setShadow] = useState(false);

  const NavbarLinks = [
    {
      name: "PROJECTS",
      path: "/",
    },
    {
      name: "EXPERTISE",
      path: "/features",
    },
    {
      name: "ABOUT US",
      path: "/courses",
    },
    {
      name: "PEOPLE",
      path: "/courses",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShadow(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav
      style={{ zIndex: "1000" }}
      className={`hidden lg:flex md:flex text-white justify-between fixed top-0 left-0 w-full  transition duration-300 ease-in-out border-b border-[#ccc]  ${
        shadow
          ? "shadow-lg backdrop-blur-md border-transparent bg-secondary drop-shadow-lg"
          : ""
      }`}
    >
      <div className="flex items-center justify-center w-full">
        <div className="flex items-center justify-around w-full px-6">
          <div className="w-full list_panel">
            <ul className="inline-flex items-center space-x-8 lg:space-x-8 md:space-x-4">
              {NavbarLinks.map((link, key) => (
                <li key={key}>
                  <NavLink
                    to={link?.path}
                    className={({ isActive }) => `px-2 py-2 `}
                  >
                    <h1 className="font-normal leading-3 text-nowrap lg:text-md md:text-md sm:text-sm font-poppins hover:text-primary">
                      {link?.name}
                    </h1>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center w-full logo">
            <img src={Logo} className="h-28 w-28" alt="logo" />
          </div>
          <div className="flex items-end justify-end w-full lang_panel">
            <ul className="inline-flex items-center space-x-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `font-normal leading-3 text-nowrap lg:text-md md:text-md sm:text-sm font-poppins hover:text-primary`
                  }
                >
                  CAREERS
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `font-normal leading-3 text-nowrap lg:text-md md:text-md sm:text-sm font-poppins hover:text-primary`
                  }
                >
                  AU
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
