import React from "react";
import { Avatar } from "../assets/index";
import { NavLink } from "react-router-dom";
import { isNotActiveStyles,isActiveStyles } from "../utils/styles";

const Header = () => {
  return (
    <header className="fixed backdrop-blur-md inset-x-0 top-0 flex items-center justify-between px-12 md:px-20 py-3 bg-[#CBCBCB]">
      <NavLink to={"/"} className="flex items-center justify-center gap-4">
        <img src={Avatar} className="w-12" alt="" />
        <p className="font-semibold text-xl">IntelliTracker</p>
      </NavLink>

      <nav className="flex items-center justify-center gap-8">
      <ul className="hidden md:flex items-center justify-center gap-10">
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNotActiveStyles
            }
            to={"/services"}
          >
            Services
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNotActiveStyles
            }
            to={"/aboutus"}
          >
            About Us
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
