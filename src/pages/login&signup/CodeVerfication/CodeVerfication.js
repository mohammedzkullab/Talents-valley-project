import { useState, useCallback, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BasicLayout from "../../../components/BasicLayout/BasicLayout";
import Button from "../../../components/Button/Button";
import Loader from "../../../components/Loader/Loader";
import VerficationOtp from "../../../components/OtpInput/VerficationOtp";
import ErrorStatment from "../../../components/error/ErrorStatment";
import { ReactComponent as BackBtn } from "../../../assets/icons/backBtn.svg";
import useFetch from "../../../hooks/useFetch";
import Resend from "../../../components/Resend/Resend";
import { API_URL } from "../../../Constants";
import { Heading, Paragraph } from "../../../designsystem/typography";

function CodeVerfication() {
  const { state } = useLocation();
  const { id, email } = state;
  const [otp, setOtp] = useState("");
  const [resendStatus, setResendStatus] = useState({});
  const [inputsObj, setInputsObj] = useState("");
  const navigate = useNavigate();

  const url = `${API_URL}user/password/verify-code`;
  const options = {
    method: "post",
    body: JSON.stringify({
      _id: id,
      verificationCode: otp,
    }),
    headers: {
      "content-type": "application/json",
    },
  };
  const dataSync = useCallback(
    (data) => {
      navigate("/resetpass", {
        state: { recoverToken: data.data.recoverToken },
      });
    },
    [navigate]
  );
  const { loading, error, fetchData } = useFetch(url, options, dataSync);
  useEffect(() => {
    let finalOtp = "";
    for (let item in inputsObj) {
      finalOtp = finalOtp.concat(inputsObj[item]);
    }
    setOtp(+finalOtp);
  }, [inputsObj]);
  const submitHandler = (event) => {
    event.preventDefault();
    if (otp) {
      fetchData();
    }
  };

  return (
    <BasicLayout
      backBtn={
        <Link to="/forgetpass">
          <BackBtn />
        </Link>
      }
    >
      <Heading>Check Your Email</Heading>
      <Paragraph mt>
        We have sent you an email that contains a code to reset your password
      </Paragraph>

      <form onSubmit={submitHandler}>
        <VerficationOtp setInputObj={setInputsObj} />

        <Button type="submit" disabled={loading}>
          {loading ? <Loader /> : "Continue"}
        </Button>
        {error && !error.key && <ErrorStatment>{error.message}</ErrorStatment>}
        {resendStatus && !error && (
          <span className={resendStatus.done ? "success" : "error_badge"}>
            {resendStatus.message && resendStatus.message}
          </span>
        )}
        <Resend
          body={{ email }}
          url={`${API_URL}user/password/forgot`}
          textMessage="Didn't get code ? "
          hint="Resend"
          setResendStatus={setResendStatus}
        />
      </form>
    </BasicLayout>
  );
}

export default CodeVerfication;
