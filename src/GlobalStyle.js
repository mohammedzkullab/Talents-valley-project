import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: var(--font-size);
  min-height: 100vh;
}
  a,
  button {
    cursor: pointer;
    text-decoration: none;
  }
  .title {
    font-size: var(--font-size);
    font-weight: 600;
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
  }

  .heading {
    font-size: 25px;
    font-weight: 600;
  }
  .paragraph {
    font-size: var(--font-size);
    margin-top: 10px;
    color: var(--gray);
  }
  button[type="submit"] {
    margin-top: 60px;
  }
  /*otp input */
  .otpInput {
    box-shadow: 0px 2px 2px #00000029;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    width: 60px;
    height: 60px;
    text-align: center;
    font-size: var(--font-size);
  }
  .otpInputs_Wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 41px;
    margin-top: 58px;
  }
  .otpInputs_Wrapper .threeInputs {
    display: flex;
    gap: 10px;
  }
  .resetPass {
    margin-top: 35px;
  }
  .form-Input {
    margin-bottom: 32px;
  }
  .signUp {
    margin-top: 30px;
    text-align: center;
    color: var(--black);
    padding-bottom: 20px;
  }
  .signUp a {
    color: var(--primary-color);
  }
  .success {
    display: flex;
    align-items: center;
    margin-top: 5px;
    font-size: var(--sub-font-size);
    color: green;
  }

`;
