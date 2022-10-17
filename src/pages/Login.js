import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import BasicLayout from "../components/BasicLayout/BasicLayout";
import useValidate from "../useValidate";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, passErr] = useValidate(email, password);
  const submitHandler = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-useless-escape
    console.log(emailErr, passErr);
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
            />
          </div>
          <div className="form-Input">
            <Input
              label="Password"
              type="password"
              required={false}
              placeholder=""
              stateHandler={setPassword}
            />
            <div className="login_forgot">
              <Link>Forgot Password? </Link>
            </div>
          </div>
          <Button type="submit">Sign In</Button>
        </form>
        <p className="signUp">
          Don't have an account?<Link to="signup"> Sign up</Link>
        </p>
      </div>
    </BasicLayout>
  );
}

export default Login;
