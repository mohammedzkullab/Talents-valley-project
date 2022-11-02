import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import BasicLayout from "../../components/BasicLayout/BasicLayout";
import Logo from "../../components/Logos/Logo";
import Loader from "../../components/Loader/Loader";
import Button from "../../components/Button/Button";
import { ReactComponent as BackBtn } from "../../assets/icons/backBtn.svg";
import { ReactComponent as ErrorBadge } from "../../assets/icons/errorBadge.svg";
import Input from "../../components/Input/Input";
import useFetch from "../../hooks/useFetch";
import useValidate from "../../hooks/useNewValidation";

import "./ForgetPass.css";

function ForgetPass() {
  /* form fields validation*/
  const forgetData = {
    email: "",
  };
  const { values, changeHandler, isValid, errors, touched, blurHandler } =
    useValidate(forgetData, {
      validations: {
        email: {
          required: { value: true, message: "please enter an email" },
          pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: "Invalid Email Format",
          },
        },
      },
    });
  /* ===  form fields validation === */
  const url = "https://talents-valley.herokuapp.com/api/user/password/forgot";
  const options = {
    method: "post",
    body: JSON.stringify({
      email: values.email,
    }),
    headers: {
      "content-type": "application/json",
    },
  };
  const navigate = useNavigate();
  const dataSyncForgot = useCallback(
    (data) => {
      navigate("/otp", { state: { id: data.data._id } });
    },
    [navigate]
  );
  const { loading, error, fetchData } = useFetch(url, options, dataSyncForgot);

  const submitHandler = (e) => {
    e.preventDefault();
    if (isValid) {
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
          name="email"
          required={false}
          placeholder="email@gmail.com"
          stateHandler={changeHandler}
          blur={blurHandler}
          errorState={touched.email && errors.email && errors.email}
          backendError={error && error}
        />

        <Button type="submit" disabled={!isValid || loading}>
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
