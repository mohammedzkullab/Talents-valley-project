import { useState, useEffect, useContext, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";
import BasicLayout from "../components/BasicLayout/BasicLayout";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import DropDown from "../components/DropDown/DropDown";
import Loader from "../components/Loader/Loader";
import { ReactComponent as ErrorBadge } from "../assets/icons/errorBadge.svg";
import useFetch from "../hooks/useFetch";
import useValidate from "../hooks/useValidate";

import "./SignUp.css";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [isTouched, setisTouched] = useState(false);
  const navigate = useNavigate();
  const isSignUp = true;
  let [emailErr, passErr] = useValidate(
    email,
    password,
    isTouched,
    setisTouched,
    isSignUp
  );
  const [firstNameErr, setFirstNameErr] = useState();
  const [lastNameErr, setLastNameErr] = useState();
  const url = "https://talents-valley.herokuapp.com/api/user/signup";
  const options = {
    method: "post",
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      email: email,
      mobile: phoneNumber,
      password: password,
      country: country,
    }),
    headers: {
      "content-type": "application/json",
    },
  };
  const auth = useContext(AuthContext);
  const dataSync = useCallback((data) => {
    auth.login(data.data.accessToken);
    navigate("home", { replace: true });
  }, []);
  const { loading, error, fetchData } = useFetch(url, options, dataSync);
  useEffect(() => {
    if (isTouched) {
      if (firstName.length === 0) setFirstNameErr("please enter first name ");
      if (lastName.length === 0) setLastNameErr("please enter last name ");
    }
  }, [isTouched]);
  const submitHandler = (event) => {
    event.preventDefault();
    setisTouched(true);
    if (email && password) {
      if (!emailErr && !passErr) {
        fetchData();
      }
    }
  };

  return (
    <BasicLayout>
      <p className="title">Create Your Account </p>
      <div className="signup_form">
        <form onSubmit={submitHandler}>
          <div className="signup_name">
            <Input
              type="text"
              label="First Name"
              required={true}
              placeholder="Enter first name "
              stateHandler={setFirstName}
              blur={setisTouched}
              errorState={firstNameErr && firstNameErr}
              backendError={error && error}
            />
            <Input
              type="text"
              label="Last Name"
              required={true}
              placeholder="Enter last name "
              stateHandler={setLastName}
              blur={setisTouched}
              errorState={lastNameErr && lastNameErr}
              backendError={error && error}
            />
          </div>
          <Input
            label="Email"
            type="email"
            required="required"
            placeholder="email@gmail.com"
            stateHandler={setEmail}
            blur={setisTouched}
            errorState={emailErr && emailErr}
            backendError={error && error}
          />
          <Input
            label="Phone Number"
            type="phone"
            placeholder="059-XXXXXXX"
            stateHandler={setPhoneNumber}
            blur={setisTouched}
            errorState={emailErr && emailErr}
            backendError={error && error}
          />

          <div className="form-Input">
            <Input
              label="Password"
              type="password"
              required="required"
              placeholder=""
              stateHandler={setPassword}
              blur={setisTouched}
              errorState={passErr && passErr}
              backendError={error && error}
            />
          </div>
          <DropDown
            items={["UAE", "Palestine"]}
            label="Country"
            stateHandler={setCountry}
          />
          <Button type="submit" className="signup_btn" disabled={loading}>
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
