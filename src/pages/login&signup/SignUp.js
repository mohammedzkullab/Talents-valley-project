/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext, useCallback, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../store/AuthContext";
import BasicLayout from "../../components/BasicLayout/BasicLayout";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import DropDown from "../../components/DropDown/DropDown";
import Loader from "../../components/Loader/Loader";
import Logo from "../../components/Logos/Logo";
import { ReactComponent as ErrorBadge } from "../../assets/icons/errorBadge.svg";
import useFetch from "../../hooks/useFetch";
import useValidate from "../../hooks/useNewValidation";
import "./SignUp.css";
import "../../GeneralStyle.css";
import "../../MediaQueries.css";

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
  const { values, changeHandler, isValid, errors, touched, blurHandler } =
    useValidate(signupData, {
      validations: {
        firstName: {
          required: { value: true, message: "please enter firstName" },
        },
        lastName: {
          required: { value: true, message: "please enter lastName" },
        },
        email: {
          required: { value: true, message: "please enter an email" },
          pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: "Invalid Email Format",
          },
        },
        password: {
          required: { value: true, message: "please enter password" },
          pattern: {
            value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/g,
            message: "Invalid password",
          },
        },
        phoneNumber: {
          required: { value: true, message: "please enter 555" },
        },
      },
    });
  useEffect(() => {
    console.log("saasd", values);
  }, [values, errors, touched]);
  /* ===  form fields validation === */
  const navigate = useNavigate();

  const url = "https://talents-valley.herokuapp.com/api/user/signup";
  const options = {
    method: "post",
    body: JSON.stringify({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      mobile: `+${values.phoneNumber}`,
      password: values.password,
      country: country,
    }),
    headers: {
      "content-type": "application/json",
    },
  };
  const auth = useContext(AuthContext);
  const dataSync = useCallback(() => {
    navigate("/", { replace: true });
  }, [auth, navigate]);
  const { loading, error, fetchData } = useFetch(url, options, dataSync);

  const submitHandler = (event) => {
    event.preventDefault();
    isValid && fetchData();
  };

  return (
    <BasicLayout head={<Logo />}>
      <p className="title heading">Create Your Account </p>
      <div className="signup_form">
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
              { id: "0", label: "Palestine" },
              { id: "1", label: "UAE" },
              { id: "2", label: "USA" },
              { id: "3", label: "UK" },
            ]}
            initItem="0"
            label="Country"
            stateHandler={setCountry}
          />
          <Button
            type="submit"
            className="signup_btn"
            disabled={isValid || loading}
          >
            {loading ? <Loader /> : "Sign up"}
          </Button>
          {error && !error.key && (
            <span className="error_badge">
              <ErrorBadge />
              {error.message}
            </span>
          )}
          {error && error.key && (
            <span className="error_badge">
              <ErrorBadge />
              {error.key} is {error.message}
            </span>
          )}
        </form>
      </div>
      <p className="signUp">
        Already have an account?<Link to="/"> Sign in</Link>
      </p>
    </BasicLayout>
  );
}

export default SignUp;
