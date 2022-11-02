import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 110px 22px 0;
  background: var(--white);
  box-shadow: #00000029 0px 0.5px 6px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  .nav_list {
    display: flex;
    align-items: center;
    gap: 51px;
  }
  .nav_list a {
    font-size: var(--font-size);
    color: var(--dark-gray);
    font-weight: 600;
  }
`;
