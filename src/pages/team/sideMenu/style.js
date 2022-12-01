import styled from "styled-components/macro";
export const StyledSideMenu = styled.aside`
  width: 224px;
  padding: 60px 30px;
  position: sticky;
  top: 50px;

  ul li {
    list-style: none;
    margin: 15px 0;
  }
  ul li a {
    font-size: 20px;
    padding-left: 16px;
    font-weight: 600;
    color: #707070;
    border-left: 2px solid #d4d4d4;
  }

  a.active {
    color: var(--primary-color);
    border-color: var(--primary-color);
  }
`;
