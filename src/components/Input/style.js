import styled from "styled-components/macro";
import { StyledErrorStatment } from "../error/style";

export const StyledInputWrapper = styled.div`
  position: relative;
  label {
    display: flex;
    flex-direction: column;
    color: var(--gray);
  }
  .input {
    margin-top: 10px;
    padding: 17px;
    border: 1px solid var(--light-gray);
    border-radius: var(--border-raduis);
    outline-color: #92aefa;
    ${"" /* outline: none; */}
    font-size: var(--font-size);
    width: 100%;
    ${"" /* height: 60px; */}
  }
  .input::placeholder {
    color: var(--gray);
  }
  .password-input {
    position: relative;
  }
  .password-input .eye {
    position: absolute;
    top: 38%;
    right: 28px;
    width: 26px;
    height: 26px;
    cursor: pointer;
    color: var(--gray);
  }
  .error {
    border-color: var(--error) !important;
  }
  .error_badge {
    display: flex;
    align-items: center;
    margin-top: 5px;
    color: var(--error) !important;
    font-size: var(--sub-font-size);
    position: absolute;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  ${StyledErrorStatment} {
    position: absolute;
  }
`;
