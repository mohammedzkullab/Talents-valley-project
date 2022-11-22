import React from "react";
import { NavLink } from "react-router-dom";
import { StyledSideMenu } from "./style";

const SideMenu = () => {
  return (
    <StyledSideMenu>
      <ul>
        <li>
          <NavLink end to="/teamdashboard">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="invoices">Invoices</NavLink>
        </li>
        <li>
          <NavLink to="users">Users</NavLink>
        </li>
      </ul>
    </StyledSideMenu>
  );
};

export default SideMenu;
