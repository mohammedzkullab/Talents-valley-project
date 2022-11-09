/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useCallback, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import BasicLayout from "../../../components/BasicLayout/BasicLayout";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import Loader from "../../../components/Loader/Loader";
import Logo from "../../../components/Logos/Logo";
import Reminder from "../../../components/Reminder/Reminder";
import ErrorStatment from "../../../components/error/ErrorStatment";
import useValidate from "../../../hooks/useNewValidation";
import useFetch from "../../../hooks/useFetch";
import { AuthContext } from "../../../store/AuthContext";
import { Heading } from "../../../designsystem/typography";
import { StyledLogin } from "./style";
import { LOGIN_VALIDATION } from "../../../utils/validationRules";
import { API_URL } from "../../../Constants";

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
    errors,
    touched,
    blurHandler,
    submitHandler: submitValidator,
  } = useValidate(loginData, LOGIN_VALIDATION, false);
  /* ===  form fields validation === */

  /* === form submission ===*/
  const auth = useContext(AuthContext);

  const url = `${API_URL}user/login`;
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
    navigate("/home", { replace: true });
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
            <Button type="submit" disabled={loading}>
              {loading ? <Loader /> : "Sign in"}
            </Button>
            {error && !error.key && (
              <ErrorStatment>{error.message}</ErrorStatment>
            )}
          </form>
          <Reminder url="signup" urlText="Sign up">
            Don't have an account?
          </Reminder>
        </div>
      </StyledLogin>
    </BasicLayout>
  );
}

export default Login;
