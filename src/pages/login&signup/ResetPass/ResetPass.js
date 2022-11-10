import { useCallback } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import BasicLayout from "../../../components/BasicLayout/BasicLayout";
import Loader from "../../../components/Loader/Loader";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import ErrorStatment from "../../../components/error/ErrorStatment";
import { ReactComponent as BackBtn } from "../../../assets/icons/backBtn.svg";
import useFetch from "../../../hooks/useFetch";
import useValidate from "../../../hooks/useNewValidation";
import { RESETPASS_VALIDATION } from "../../../utils/validationRules";
import { API_URL } from "../../../Constants";
function ResetPass() {
  const { state } = useLocation();
  const { recoverToken } = state;
  /* form fields validation*/
  const resetData = {
    password: "",
    coPassword: "",
  };
  const {
    values,
    changeHandler,
    errors,
    touched,
    blurHandler,
    submitHandler: submitValidator,
  } = useValidate(resetData, RESETPASS_VALIDATION, true);
  /* form fields validation*/
  const url = `${API_URL}user/password/recover`;
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

  const submitHandler = (event) => {
    submitValidator(event, fetchData);
  };
  return (
    <BasicLayout
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
          {loading ? <Loader /> : "Continue"}
        </Button>
        {error && !error.key && <ErrorStatment>{error.message}</ErrorStatment>}
      </form>
    </BasicLayout>
  );
}

export default ResetPass;
