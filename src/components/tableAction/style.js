import styled from "styled-components/macro";
export const StyledDots = styled.div`
  position: relative;
  cursor: pointer;
  transition: all 2s ease-in-out;

  svg {
    width: 3.5px;
    height: 27px;
  }
`;

export const StyledPopup = styled.div`
  background: #fff;
  position: absolute;
  top: 21px;
  right: 10px;
  padding: 10px 0;
  width: 190px;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  z-index: 100;
  ul {
    list-style: none;
    text-align: left;
  }
  ul li {
    padding: 15px;
  }
  ul li:hover {
    background: var(--light-gray);
  }
`;
