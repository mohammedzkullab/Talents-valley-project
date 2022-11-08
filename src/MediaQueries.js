import { createGlobalStyle } from "styled-components";
import { StyledContentWrapper } from "./components/ContentWrapper/style";
import { SuperHeading } from "./designsystem/typography";
import { StyledFooter } from "./components/Footer/style";
import Button from "./components/Button/Button";
export const MediaQueries = createGlobalStyle`
  @media only screen and (max-height: 1080px ) and (min-width: 1200px) {
   ${StyledContentWrapper}{ min-height: 678px;
    width: 615px;
    padding: 16px 59px 40px 59px;
    margin-top: ${(verfication) => (verfication ? "45px" : "0")};
    .head {
      margin-bottom: 30px;
    }}
  }
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (max-width: 992px) {
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (max-width: 768px) {
  ${StyledContentWrapper} {
    padding: 16px 50px 62px 50px;
    width: 570px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 606px) {
  ${Button}{
    font-size: var(--res-font-size) !important;
  }
  .btn,
  .input,
  .title,
  .react-tel-input .form-control,
  .dropdown_button,
  .paragraph {
    font-size: var(--res-font-size) !important;
  }
  
  ${StyledContentWrapper} {
    padding: 16px 30px 42px 30px;
    width: 450px;
  }
  ${StyledFooter}  {
    width: 100%;
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 395px) {
  body {
    font-size: var(--res-font-size) !important;
  }

  ${SuperHeading}{
    font-size:20px;
  }
  span,
  .error-badge {
    font-size: var(--res-sub-font-size) !important;
  }
  .layout {
    padding-top: 25px;
  }
  .logo_Wrapper {
    margin-bottom: 30px;
  }
  .logo_Wrapper img {
    width: 150px !important;
  }
  ${StyledContentWrapper} {
    padding: 16px 25px 22px 25px;
    width: 370px;
    min-height: auto;
    .input {
    height: 50px;
  }
  .logo{
    width:150px
  }
  }
  .form-Input {
    margin-bottom: 18px;
  }
  .input,
  .dropdown_button {
    padding: 12px !important;
  }
  .login_form form button,
  .signup_form form button[type="submit"] {
    margin-top: 15px !important;
  }
  .signUp {
    margin-top: 22px;
  }
  .password-input .eye,
  .indicator {
    right: 17px !important;
  }

  /*signup*/
  .signup_name {
    gap: 10px !important;
  }
  ${StyledFooter} {
    width: 100%;
    padding-bottom: 32px;
    a {
    font-size: var(--res-sub-font-size);
  }
  }

  .react-tel-input {
    padding: 6px !important;
  }
  .head a {
    margin-right: 65px;
  }
}


`;
