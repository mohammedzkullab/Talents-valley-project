import { useState, useCallback, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BasicLayout from "../../components/BasicLayout/BasicLayout";
import Button from "../../components/Button/Button";
import Loader from "../../components/Loader/Loader";
import Logo from "../../components/Logos/Logo";
import VerficationOtp from "../../components/OtpInput/VerficationOtp";
import { ReactComponent as BackBtn } from "../../assets/icons/backBtn.svg";
import { ReactComponent as ErrorBadge } from "../../assets/icons/errorBadge.svg";
import useFetch from "../../hooks/useFetch";
import Resend from "../../components/Resend/Resend";
function CodeVerfication() {
  const { state } = useLocation();
  const { id, email } = state;
  const [otp, setOtp] = useState("");
  const [resendStatus, setResendStatus] = useState({});
  const [inputsObj, setInputsObj] = useState("");
  const navigate = useNavigate();

  const url =
    "https://talents-valley.herokuapp.com/api/user/password/verify-code";
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
      head={<Logo />}
      backBtn={
        <Link to="/forgetpass">
          <BackBtn />
        </Link>
      }
    >
      <p className="title heading">Check Your Email</p>
      <p className="paragraph">
        We have sent you an email that contains a code to reset your password
      </p>
      <div className="">
        <form onSubmit={submitHandler}>
          <VerficationOtp setInputObj={setInputsObj} />

          <Button type="submit" disabled={loading}>
            {loading ? <Loader /> : "Continue"}
          </Button>
          {error && !error.key && (
            <span className="error_badge">
              <ErrorBadge />
              {error.message}
            </span>
          )}
          {resendStatus && !error && (
            <span className={resendStatus.done ? "success" : "error_badge"}>
              {resendStatus.message && resendStatus.message}
            </span>
          )}

          <Resend
            body={{ email }}
            url="https://talents-valley.herokuapp.com/api/user/password/forgot"
            textMessage="Didn't get code ? "
            hint="Resend"
            setResendStatus={setResendStatus}
          />
        </form>
      </div>
    </BasicLayout>
  );
}

export default CodeVerfication;
