import { createGlobalStyle } from "styled-components";
import { StyledContentWrapper } from "./components/ContentWrapper/style";
import { Heading, SubHeading, SuperHeading } from "./designsystem/typography";
import { StyledFooter } from "./components/Footer/style";
import { StyledButton } from "./components/Button/style";
import { StyledErrorStatment } from "./components/error/style";
import { LdsDualRing } from "./components/Loader/Loader";
import { StyledResendWrapper } from "./components/Resend/style";
import { Layout } from "./components/BasicLayout/style";
import { StyledFlexWrapper } from "./pages/verfication/verifyAddress/style";
import { StyledInputWrapper } from "./components/Input/style";
import {
  StyledUploadFile,
  StyledUploadFileWithFile,
} from "./components/uploadFile/style";
import {
  StyledVerficationItem,
  VerficationWrapper,
} from "./pages/verfication/mainpage/style";
export const MediaQueries = createGlobalStyle`
  @media only screen and (max-height: 1080px ) and (min-width: 1200px) {
   ${StyledContentWrapper}{
    min-height: 678px !important;
    padding: 16px 80px 40px 80px;
    margin-top: ${(verfication) => (verfication ? "45px" : "0")};
    .head {
      margin-bottom: 60px;
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
 ${StyledButton}{
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
  ${StyledFlexWrapper}{
    flex-direction:column;
    gap:0px;
    ${StyledInputWrapper} {
    width: 100%;
  }
  }
  .dropdown-header{
    padding:10px;
  }
  ${StyledUploadFile} , ${StyledUploadFileWithFile}{
    padding:10px;
    margin-top:22px;
  }
  ${StyledUploadFileWithFile}{
    .details p {
    font-size: 12px;
   
  }
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
  ${SubHeading}{
    font-size:15px;
  }
  ${Heading}{
    font-size:20px;
  }
  span,
  .error-badge {
    font-size: 10px !important;
  }
  .layout {
    padding-top: 25px;
  }
  .logo_Wrapper {
    margin-bottom: 60px;
  }
  .logo_Wrapper img {
    width: 150px !important;
  }
  .logo{
    width:150px
  }

  .form-Input {
    margin-bottom: 22px;
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
     gap: 0px !important;
    flex-direction:column;

  }
  .otpInput{
    width:45px;
    height:45px;
  }
  .otpInputs_Wrapper{
    gap:20px
  }

  .react-tel-input {
    padding: 6px !important;
  }
  .head {
      margin-bottom: 60px !important;
    }
  .head a {
    top:101px !important;
}
  ${StyledContentWrapper} {
    padding: 49px 25px 50px 25px;
    width: 370px;
    min-height: auto;
    margin-top: 30px;
    .input {
    height: 50px;
    
  }}
  ${StyledErrorStatment}{
    margin-top:3px
    svg{
      width:24px
    }
  }
  ${StyledFooter} {
    width: 100%;
    padding-bottom: 32px;
    a {
    font-size: var(--res-sub-font-size);
  }
  }
  ${Layout}{
    padding-top:35px;
  }
  ${LdsDualRing}{
    width:13px;
    height:13px;
    &:after {
    width:13px;
    height:13px;
    }
  }
  ${StyledResendWrapper}{
    p span{
      font-size:var(--font-size) !important ;
    }
  }
  ${StyledVerficationItem}{
    padding: 18px 12px 18px 12px;
    .checkDone svg {
    margin-right: 10px !important;
  }
  .checkDone button {
    padding:6px 25px;
    white-space: nowrap;
  }
  .label-with-reject-statment {
    gap: 10px;
  }
  .valid {
    flex-direction:column;
  }
  }
  ${VerficationWrapper}{
    .contBtn {
    margin-top: 20px;
  }
  }

}
`;
