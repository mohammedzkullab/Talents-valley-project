import { useCallback } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import BasicLayout from "../../../components/BasicLayout/BasicLayout";
import Logo from "../../../components/Logos/Logo";
import Loader from "../../../components/Loader/Loader";
import Button from "../../../components/Button/Button";
import { ReactComponent as BackBtn } from "../../../assets/icons/backBtn.svg";
import { ReactComponent as ErrorBadge } from "../../../assets/icons/errorBadge.svg";
import Input from "../../../components/Input/Input";
import useFetch from "../../../hooks/useFetch";
import useValidate from "../../../hooks/useNewValidation";
import { RESETPASS_VALIDATION } from "../../../utils/validationRules";
function ResetPass() {
  const { state } = useLocation();
  const { recoverToken } = state;
  /* form fields validation*/
  const resetData = {
    password: "",
    coPassword: "",
  };
  const { values, changeHandler, isValid, errors, touched, blurHandler } =
    useValidate(resetData, RESETPASS_VALIDATION, true);
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
  }, [navigate]);
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
        <Button type="submit" disabled={loading}>
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
