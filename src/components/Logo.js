import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 65px;
  @media only screen and (max-height: 1080px) {
    margin-bottom: 30px;
  }
`;
function Logo() {
  return (
    <LogoWrapper>
      <img src={logo} alt="logo" className="logo" />
    </LogoWrapper>
  );
}

export default Logo;
