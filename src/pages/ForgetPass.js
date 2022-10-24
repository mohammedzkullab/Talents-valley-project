import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import BasicLayout from "../components/BasicLayout/BasicLayout";
import Logo from "../components/Logo";
import Loader from "../components/Loader/Loader";
import Button from "../components/Button/Button";
import { ReactComponent as BackBtn } from "../assets/icons/backBtn.svg";
import { ReactComponent as ErrorBadge } from "../assets/icons/errorBadge.svg";
import Input from "../components/Input/Input";
import useFetch from "../hooks/useFetch";
import useValidate from "../hooks/useValidate";

import "./ForgetPass.css";

function ForgetPass() {
  const [email, setEmail] = useState("");
  const [isTouched, setisTouched] = useState(false);
  const [emailErr] = useValidate(email, null, isTouched, setisTouched, false);
  const url = "https://talents-valley.herokuapp.com/api/user/password/forgot";
  const options = {
    method: "post",
    body: JSON.stringify({
      email: email,
    }),
    headers: {
      "content-type": "application/json",
    },
  };
  const navigate = useNavigate();
  const dataSyncForgot = useCallback((data) => {
    navigate("/otp", { state: { id: data.data._id } });
  }, []);
  const { loading, error, fetchData } = useFetch(url, options, dataSyncForgot);

  const submitHandler = (e) => {
    e.preventDefault();
    setisTouched(true);
    if (email && !emailErr) {
      fetchData();
    }
  };
  return (
    <BasicLayout
      head={<Logo />}
      backBtn={
        <Link to="/">
          <BackBtn />
        </Link>
      }
    >
      <p className="title heading">Forgot Password?</p>
      <p className="paragraph">
        We'll send a code to your email to reset your password
      </p>
      <form className="forget_form" onSubmit={submitHandler}>
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

export default ForgetPass;
