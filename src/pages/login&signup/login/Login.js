/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useCallback, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import BasicLayout from "../../../components/BasicLayout/BasicLayout";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import Loader from "../../../components/Loader/Loader";
import Logo from "../../../components/Logos/Logo";
import { ReactComponent as ErrorBadge } from "../../../assets/icons/errorBadge.svg";
import useValidate from "../../../hooks/useNewValidation";
import useFetch from "../../../hooks/useFetch";
import { AuthContext } from "../../../store/AuthContext";
import { Heading } from "../../../designsystem/typography";
import { StyledLogin } from "./style";
import "../../../MediaQueries.css";
function Login() {
  /* form fields validation*/
  const inputFocus = useRef();
  const loginData = {
    email: "",
    password: "",
  };
  const {
    values,
    changeHandler,
    isValid,
    errors,
    touched,
    blurHandler,
    submitHandler: submitValidator,
  } = useValidate(loginData, {
    validations: {
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
    },
  });
  /* ===  form fields validation === */

  /* === form submission ===*/
  const auth = useContext(AuthContext);

  const url = "https://talents-valley.herokuapp.com/api/user/login";
  const options = {
    method: "post",
    body: JSON.stringify({
      email: values.email,
      password: values.password,
    }),
    headers: {
      "content-type": "application/json",
    },
  };
  const navigate = useNavigate();
  const dataSync = useCallback((data) => {
    auth.login(data.data.accessToken, data.data.user);
    navigate("home", { replace: true });
  }, []);
  const { loading, error, fetchData } = useFetch(url, options, dataSync);
  const submitHandler = (event) => {
    submitValidator(event, fetchData);
  };
  /* === form submission ===*/
  return (
    <BasicLayout head={<Logo />}>
      <StyledLogin>
        <Heading>Login To Your Account </Heading>
        <div className="login_form">
          <form onSubmit={submitHandler}>
            <Input
              label="Email"
              type="text"
              name="email"
              refer={inputFocus}
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
              <div className="login_forgot">
                <Link to="forgetPass">Forgot Password? </Link>
              </div>
            </div>
            <Button type="submit">{loading ? <Loader /> : "Sign in"}</Button>
            {error && !error.key && (
              <span className="error_badge">
                <ErrorBadge />
                {error.message}
              </span>
            )}
          </form>
          <p className="signUp">
            Don't have an account?<Link to="signup"> Sign up</Link>
          </p>
        </div>
      </StyledLogin>
    </BasicLayout>
  );
}

export default Login;
