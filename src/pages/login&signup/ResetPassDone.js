import { Link, useNavigate, useLocation } from "react-router-dom";
import BasicLayout from "../../components/BasicLayout/BasicLayout";
import Logo from "../../components/Logo";
import Button from "../../components/Button/Button";
import { ReactComponent as DoneCheck } from "../../assets/icons/checkDone.svg";
import "./ResetPassDone.css";

function ResetPassDone() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <BasicLayout head={<Logo />}>
      <div className="check-done">
        <DoneCheck />
        <p className="title heading pass-res">Password Reset</p>
        <p className="heading light-heading">
          Your Password has been Successfully Reset. Click Below To Login
        </p>
      </div>

      <Button type="submit" onClick={handleClick}>
        Sign In
      </Button>
    </BasicLayout>
  );
}

export default ResetPassDone;
