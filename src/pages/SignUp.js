import { Link } from "react-router-dom";
import BasicLayout from "../components/BasicLayout/BasicLayout";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import "./SignUp.css";
import DropDown from "../components/DropDown/DropDown";

function SignUp() {
  return (
    <BasicLayout>
      <p className="title">Login To Your Account </p>
      <div className="signup_form">
        <form>
          <div className="signup_name">
            <Input
              type="text"
              label="First Name"
              required={true}
              placeholder="Enter first name "
            />
            <Input
              type="text"
              label="Last Name"
              required={true}
              placeholder="Enter last name "
            />
          </div>
          <Input
            label="Email"
            type="email"
            required="required"
            placeholder="email@gmail.com"
          />
          <div className="form-Input">
            <Input
              label="Password"
              type="password"
              required="required"
              placeholder=""
            />
          </div>
          <DropDown items={[1, 2, 3]} label="Country" />
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
      <p className="signUp">
        Already have an account?<Link to="/"> Sign in</Link>
      </p>
    </BasicLayout>
  );
}

export default SignUp;
