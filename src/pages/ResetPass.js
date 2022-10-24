import { useState, useCallback } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import BasicLayout from "../components/BasicLayout/BasicLayout";
import Logo from "../components/Logo";
import Loader from "../components/Loader/Loader";
import Button from "../components/Button/Button";
import { ReactComponent as BackBtn } from "../assets/icons/backBtn.svg";
import { ReactComponent as ErrorBadge } from "../assets/icons/errorBadge.svg";
import Input from "../components/Input/Input";
import useFetch from "../hooks/useFetch";
import useValidate from "../hooks/useValidate";
function ResetPass() {
  const { state } = useLocation();
  const { recoverToken } = state;
  const [password, setPassword] = useState();
  const [coPassword, setCoPassword] = useState();
  const [isTouched, setisTouched] = useState(false);
  const [emailErr, passErr] = useValidate(
    null,
    password,
    isTouched,
    setisTouched,
    false
  );
  const url = "https://talents-valley.herokuapp.com/api/user/password/recover";
  const options = {
    method: "post",
    body: JSON.stringify({
      password: password,
      recoverToken: recoverToken,
    }),
    headers: {
      "content-type": "application/json",
    },
  };
  const navigate = useNavigate();
  const dataSyncReset = useCallback(() => {
    navigate("/resetpassdone", { replace: true });
  }, []);
  const { loading, error, fetchData } = useFetch(url, options, dataSyncReset);

  const submitHandler = (e) => {
    e.preventDefault();
    setisTouched(true);
    if (!passErr && password === coPassword) {
      fetchData();
    } else if (!password === coPassword) {
    }
  };
  return (
    <BasicLayout
      head={<Logo />}
      backBtn={
        <Link to="/forgetpass">
          <BackBtn />
        </Link>
      }
    >
      <p className="title heading">Create New Password</p>
      <form className="forget_form" onSubmit={submitHandler}>
        <div className="form-Input">
          <Input
            label="New Password"
            type="password"
            required="required"
            placeholder=""
            stateHandler={setPassword}
            blur={setisTouched}
            errorState={passErr && passErr}
            backendError={error && error}
          />
        </div>
        <div className="form-Input">
          <Input
            label="Re-Enter Password"
            type="password"
            required="required"
            placeholder=""
            stateHandler={setCoPassword}
            blur={setisTouched}
            errorState={passErr && passErr}
            backendError={error && error}
          />
        </div>
        <Button type="submit" disabled={loading}>
          {loading ? <Loader /> : "Send Code"}
        </Button>
        {error && !error.key && (
          <span className="error_badge">
            <ErrorBadge />
            {error.message}
          </span>
        )}
      </form>
    </BasicLayout>
  );
}

export default ResetPass;
