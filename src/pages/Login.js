/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useContext, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import BasicLayout from "../components/BasicLayout/BasicLayout";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import Loader from "../components/Loader/Loader";
import { ReactComponent as ErrorBadge } from "../assets/icons/errorBadge.svg";
import useValidate from "../hooks/useValidate";
import useFetch from "../hooks/useFetch";
import { AuthContext } from "../store/AuthContext";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isTouched, setisTouched] = useState(false);
  const navigate = useNavigate();
  let [emailErr, passErr] = useValidate(
    email,
    password,
    isTouched,
    setisTouched
  );
  const url = "https://talents-valley.herokuapp.com/api/user/login";
  const options = {
    method: "post",
    body: JSON.stringify({
      email: email,
      password: password,
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
      <p className="title">Login To Your Account </p>
      <div className="login_form">
        <form onSubmit={submitHandler}>
          <div className="form-Input">
            <Input
              label="Email"
              type="text"
              required={false}
              placeholder="email@gmail.com"
              stateHandler={setEmail}
              blur={setisTouched}
              errorState={emailErr && emailErr}
              backendError={error && error}
            />
          </div>
          <div className="form-Input">
            <Input
              label="Password"
              type="password"
              required={false}
              placeholder=""
              stateHandler={setPassword}
              blur={setisTouched}
              errorState={passErr && passErr}
              backendError={error && error}
            />
            <div className="login_forgot">
              <Link>Forgot Password? </Link>
            </div>
          </div>
          <Button type="submit" disabled={loading}>
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
