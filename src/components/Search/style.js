import styled from "styled-components/macro";
import { StyledPopup } from "../tableAction/style";
export const StyledSearch = styled.div`
  position: relative;
  svg {
    position: absolute;
    left: 32px;
    top: 28%;
  }
  input[type="search"] {
    width: 100%;
    padding: 17px;
    padding-left: 60px;
    border: none;
    border-radius: var(--border-raduis);
    font-size: var(--font-size);
    outline-color: #92aefa;
    margin-bottom: 10px;
    box-shadow: 0px 0.5px 3px #00000029;
    .input::placeholder {
      color: var(--gray);
    }
    appearance: none;
  }
`;

export const StyledFilter = styled.div`
  cursor: pointer;
  svg {
    position: absolute;
    right: 40px;
    top: 28%;
    left: auto;
  }
  ${StyledPopup} {
    right: 40px;
    top: 33px;
  }
`;

export const StyledFilterItem = styled.label`
  cursor: pointer;

  font-weight: 500;
  width: 100%;
  li {
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    margin-right: 12px;
    font: inherit;
    color: currentColor;
    width: 15px;
    height: 15px;
    border: 0.5px solid #000000;
    border-radius: 0.15em;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
  }

  input[type="checkbox"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    background-color: var(--primary-color);
  }

  input[type="checkbox"]:checked::before {
    transform: scale(1);
  }
`;
