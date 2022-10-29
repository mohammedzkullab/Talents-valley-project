import { useState, useCallback } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import BasicLayout from "../../components/BasicLayout/BasicLayout";
import Logo from "../../components/Logo";
import Loader from "../../components/Loader/Loader";
import Button from "../../components/Button/Button";
import { ReactComponent as BackBtn } from "../../assets/icons/backBtn.svg";
import { ReactComponent as ErrorBadge } from "../../assets/icons/errorBadge.svg";
import Input from "../../components/Input/Input";
import useFetch from "../../hooks/useFetch";
import useValidate from "../../hooks/useNewValidation";
function ResetPass() {
  const { state } = useLocation();
  const { recoverToken } = state;
  /* form fields validation*/
  const resetData = {
    password: "",
    coPassword: "",
  };
  const { values, changeHandler, isValid, errors, touched, blurHandler } =
    useValidate(resetData, {
      validations: {
        password: {
          required: { value: true, message: "please enter password" },
          pattern: {
            value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/g,
            message: "Weak Password ",
          },
        },
        coPassword: {
          required: { value: true, message: "please enter co-password" },
          isSame: {
            value: ["password", "coPassword"],
            message: "password and its confirm doesn't match",
          },
        },
      },
    });
  /* form fields validation*/
  const url = "https://talents-valley.herokuapp.com/api/user/password/recover";
  const options = {
    method: "post",
    body: JSON.stringify({
      password: values.password,
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
    isValid && fetchData();
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
      <form className="resetPass" onSubmit={submitHandler}>
        <div className="form-Input">
          <Input
            label="New Password"
            type="password"
            name="password"
            placeholder=""
            stateHandler={changeHandler}
            blur={blurHandler}
            errorState={touched.password && errors.password && errors.password}
            backendError={error && error}
          />
        </div>
        <div className="form-Input">
          <Input
            label="Re-Enter Password"
            type="password"
            name="coPassword"
            placeholder=""
            stateHandler={changeHandler}
            blur={blurHandler}
            errorState={
              touched.coPassword && errors.coPassword && errors.coPassword
            }
            backendError={error && error}
          />
        </div>
        <Button type="submit" disabled={!isValid || loading}>
          {loading ? <Loader /> : "reset Pass"}
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
