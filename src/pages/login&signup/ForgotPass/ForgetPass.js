import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heading, Paragraph } from "../../../designsystem/typography";
import BasicLayout from "../../../components/BasicLayout/BasicLayout";
import Loader from "../../../components/Loader/Loader";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import ErrorStatment from "../../../components/error/ErrorStatment";
import { ReactComponent as BackBtn } from "../../../assets/icons/backBtn.svg";
import useFetch from "../../../hooks/useFetch";
import useValidate from "../../../hooks/useNewValidation";
import { FORGET_VALIDATION } from "../../../utils/validationRules";
import { API_URL } from "../../../Constants";
import { ForgetForm, HeadingWrapper } from "./style";

function ForgetPass() {
  /* form fields validation*/
  const forgetData = {
    email: "",
  };
  const {
    values,
    changeHandler,
    errors,
    touched,
    blurHandler,
    submitHandler: submitValidator,
  } = useValidate(forgetData, FORGET_VALIDATION);
  /* ===  form fields validation === */
  const url = `${API_URL}user/password/forgot`;
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
      navigate("/otp", { state: { id: data.data._id, email: values.email } });
    },
    [navigate, values]
  );
  const { loading, error, fetchData } = useFetch(url, options, dataSyncForgot);

  const submitHandler = (event) => {
    submitValidator(event, fetchData);
  };
  return (
    <BasicLayout
      backBtn={
        <Link to="/">
          <BackBtn />
        </Link>
      }
    >
      <HeadingWrapper>
        <Heading>Forgot Password?</Heading>
        <Paragraph mt>
          We'll send a code to your email to reset your password
        </Paragraph>
      </HeadingWrapper>
      <ForgetForm onSubmit={submitHandler}>
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

        <Button type="submit" disabled={loading}>
          {loading ? <Loader /> : "Send Code"}
        </Button>
        {error && <ErrorStatment>{error.message}</ErrorStatment>}
      </ForgetForm>
    </BasicLayout>
  );
}

export default ForgetPass;
