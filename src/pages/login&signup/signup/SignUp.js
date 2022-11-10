import { useState, useCallback, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import BasicLayout from "../../../components/BasicLayout/BasicLayout";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import DropDown from "../../../components/DropDown/DropDown";
import Loader from "../../../components/Loader/Loader";
import useFetch from "../../../hooks/useFetch";
import useValidate from "../../../hooks/useNewValidation";
import { Heading } from "../../../designsystem/typography";
import { SIGNUP_VALIDATION } from "../../../utils/validationRules";
import { API_URL } from "../../../Constants";
import { SignUpWrapper } from "./style";
import ErrorStatment from "../../../components/error/ErrorStatment";

function SignUp() {
  const inputFocus = useRef();
  const [country, setCountry] = useState("");
  /* form fields validation*/
  const signupData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  };
  const {
    values,
    changeHandler,
    errors,
    touched,
    blurHandler,
    submitHandler: submitValidator,
  } = useValidate(signupData, SIGNUP_VALIDATION);

  /* ===  form fields validation === */
  const navigate = useNavigate();

  const url = `${API_URL}user/signup`;
  const options = {
    method: "post",
    body: JSON.stringify({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      mobile: values.phoneNumber.replace(/\s/g, ""),
      password: values.password,
      country: country,
    }),
    headers: {
      "content-type": "application/json",
    },
  };
  const dataSync = useCallback(() => {
    navigate("/", { replace: true });
  }, [navigate]);
  const { loading, error, fetchData } = useFetch(url, options, dataSync);

  const submitHandler = (event) => {
    submitValidator(event, fetchData);
  };

  return (
    <BasicLayout>
      <Heading>Create Your Account </Heading>
      <SignUpWrapper>
        <form onSubmit={submitHandler}>
          <div className="signup_name">
            <Input
              label="First Name"
              type="text"
              name="firstName"
              refer={inputFocus}
              placeholder="Enter first name "
              stateHandler={changeHandler}
              blur={blurHandler}
              errorState={
                touched.firstName && errors.firstName && errors.firstName
              }
              backendError={error && error}
            />
            <Input
              label="Last Name"
              type="text"
              name="lastName"
              placeholder="Enter last name "
              stateHandler={changeHandler}
              blur={blurHandler}
              errorState={
                touched.lastName && errors.lastName && errors.lastName
              }
              backendError={error && error}
            />
          </div>
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="email@gmail.com"
            stateHandler={changeHandler}
            blur={blurHandler}
            errorState={touched.email && errors.email && errors.email}
            backendError={error && error}
          />
          <div className="form-Input">
            <Input
              label="Password"
              type="password"
              name="password"
              placeholder=""
              stateHandler={changeHandler}
              blur={blurHandler}
              errorState={
                touched.password && errors.password && errors.password
              }
              backendError={error && error}
            />
          </div>
          <Input
            label="PhoneNumber"
            type="phone"
            name="phoneNumber"
            placeholder="059-XXXXXXX"
            stateHandler={changeHandler}
            blur={blurHandler}
            errorState={
              touched.phoneNumber && errors.phoneNumber && errors.phoneNumber
            }
            backendError={error && error}
          />
          <DropDown
            items={[
              { id: "Palestine", label: "Palestine" },
              { id: "UAE", label: "UAE" },
              { id: "USA", label: "USA" },
              { id: "UK", label: "UK" },
            ]}
            initItem="Palestine"
            label="Country"
            stateHandler={setCountry}
          />
          <Button type="submit" className="signup_btn" disabled={loading}>
            {loading ? <Loader /> : "Sign up"}
          </Button>
          {error && !error.key && (
            <ErrorStatment>{error.message}</ErrorStatment>
          )}
          {error && error.key && (
            <ErrorStatment>
              {error.key} is {error.message}
            </ErrorStatment>
          )}
        </form>
      </SignUpWrapper>
      <p className="signUp">
        Already have an account?<Link to="/"> Sign in</Link>
      </p>
    </BasicLayout>
  );
}

export default SignUp;
