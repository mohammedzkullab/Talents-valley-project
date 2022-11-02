import React from "react";
import { NavLink } from "react-router-dom";
import LogoHorizintal from "../Logos/LogoHorizintal";
import OutlineButton from "../Button/OutlineButton";
import { StyledNavbar } from "./style";

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="nav_logo">
        <LogoHorizintal to="/home" />
      </div>
      <div className="nav_list">
        <NavLink>Home</NavLink>
        <NavLink>Invoices</NavLink>
        <OutlineButton>create</OutlineButton>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
