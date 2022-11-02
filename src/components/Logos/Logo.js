import React from "react";
import logo from "../../assets/images/logo.svg";
import { LogoWrapper } from "./styles.styled";

function Logo() {
  return (
    <LogoWrapper>
      <img src={logo} alt="logo" className="logo" />
    </LogoWrapper>
  );
}

export default Logo;
