import React from "react";
import { StyledDisabledButton } from "./style";

const DisabledButton = ({ children = "button", type = "button", ...rest }) => {
  return (
    <StyledDisabledButton type={type} className="btn" disabled={true} {...rest}>
      {children}
    </StyledDisabledButton>
  );
};

export default DisabledButton;
