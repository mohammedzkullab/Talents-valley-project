import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/tallents-valley-logo-without-text.png";
import { StyledLogoHorizintal } from "./styles.styled";

const LogoHorizintal = ({ to = "/" }) => {
  return (
    <Link to={to}>
      <StyledLogoHorizintal>
        <img src={logo} alt="logo" className="logo" />
        <p>TALLENTS VALLEY</p>
      </StyledLogoHorizintal>
    </Link>
  );
};

export default LogoHorizintal;
