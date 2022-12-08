import React from "react";
import { NavLink } from "react-router-dom";
import { Heading } from "../../../designsystem/typography";
import { StyledSideMenu } from "./style";

const SideMenu = ({ items = [], heading = "" }) => {
  return (
    <StyledSideMenu>
      <Heading>{heading}</Heading>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item?.end ? (
              <NavLink end to={item.path}>
                {item.title}
              </NavLink>
            ) : (
              <NavLink to={item.path}>{item.title}</NavLink>
            )}
          </li>
        ))}
      </ul>
    </StyledSideMenu>
  );
};

export default SideMenu;
