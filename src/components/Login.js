import { Link } from "react-router-dom";
import Logo from "./Logo";
import "./Login.css";
import Input from "./Input/Input";
import Button from "./Button/Button";
import Footer from "./Footer/Footer";
function Login() {
  return (
    <div className="login">
      <div className="login_wrapper">
        <Logo />
        <p className="title">Login To Your Account </p>
        <div className="login_form">
          <form>
            <div className="form-Input">
              <Input
                label="Email"
                type="email"
                required="required"
                placeholder="email@gmail.com"
              />
            </div>
            <div className="form-Input">
              <Input
                label="Password"
                type="password"
                required="required"
                placeholder=""
              />
              <div className="login_forgot">
                <Link>Forgot Password? </Link>
              </div>
            </div>
            <Button type="submit">Sign In</Button>
          </form>
          <p className="signUp">
            Don't have an account?<Link> Sign up</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
