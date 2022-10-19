/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import BasicLayout from "../components/BasicLayout/BasicLayout";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import Loader from "../components/Loader/Loader";
import useValidate from "../hooks/useValidate";
import useFetch from "../hooks/useFetch";
import { AuthContext } from "../store/AuthContext";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isTouched, setisTouched] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
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
    if (email && password) {
      if (!emailErr && !passErr) {
        // setIsSubmit(true);
        fetchData();
      }
    }
  };

  return (
    <BasicLayout>
      <p>{error && error.message}</p>
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
              errorState={error && error.message}
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
            />
            <div className="login_forgot">
              <Link>Forgot Password? </Link>
            </div>
          </div>
          <Button type="submit">{loading ? <Loader /> : "Sign in"}</Button>
        </form>
        <p className="signUp">
          Don't have an account?<Link to="signup"> Sign up</Link>
        </p>
      </div>
    </BasicLayout>
  );
}

export default Login;
