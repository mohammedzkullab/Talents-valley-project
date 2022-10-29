/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import BasicLayout from "../../components/BasicLayout/BasicLayout";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Loader from "../../components/Loader/Loader";
import Logo from "../../components/Logo";
import { ReactComponent as ErrorBadge } from "../../assets/icons/errorBadge.svg";
import useValidate from "../../hooks/useNewValidation";
import useFetch from "../../hooks/useFetch";
import { AuthContext } from "../../store/AuthContext";
import "./Login.css";
import "../../MediaQueries.css";
function Login() {
  /* form fields validation*/
  const loginData = {
    email: "",
    password: "",
  };
  const { values, changeHandler, isValid, errors, touched, blurHandler } =
    useValidate(loginData, {
      validations: {
        email: {
          required: { value: true, message: "please enter an email" },
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
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
    event.preventDefault();
    if (isValid) {
      fetchData();
    }
  };
  /* === form submission ===*/

  return (
    <BasicLayout head={<Logo />}>
      <p className="title heading">Login To Your Account </p>
      <div className="login_form">
        <form onSubmit={submitHandler}>
          <div className="form-Input">
            <Input
              label="Email"
              type="text"
              name="email"
              placeholder="email@gmail.com"
              stateHandler={changeHandler}
              blur={blurHandler}
              errorState={touched.email && errors.email && errors.email}
              backendError={error && error}
            />
          </div>
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
          <Button type="submit" disabled={!isValid || loading}>
            {loading ? <Loader /> : "Sign in"}
          </Button>
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
    </BasicLayout>
  );
}

export default Login;
