import React, { useContext, useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import MainLayout from "../../../components/MainLayout/MainLayout";
import { SuperHeading, SubHeading } from "../../../designsystem/typography";
import { AuthContext } from "../../../store/AuthContext";
import Button from "../../../components/Button/Button";
import { replaceRange } from "../../../utils/replaceRange";
import EmailIcon from "../../../assets/images/email.png";
import VerficationOtp from "../../../components/OtpInput/VerficationOtp";
import useFetch from "../../../hooks/useFetch";
import Loader from "../../../components/Loader/Loader";
import { HeaderWrapper } from "../HeaderWrapper";
const VerifyEmail = () => {
  const auth = useContext(AuthContext);
  const [userData] = useState(auth.userData);
  const [otp, setOtp] = useState("");
  const [inputsObj, setInputsObj] = useState("");
  const navigate = useNavigate();
  const url = "https://talents-valley.herokuapp.com/api/user/verify/email";
  const options = {
    method: "post",
    body: JSON.stringify({
      verificationCode: otp,
    }),
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${auth.token}`,
    },
  };
  const dataSync = useCallback(() => {
    navigate("/verfication/emailDone");
  }, [navigate]);
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
    if (!error) {
      fetchData();
    }
  };
  var newEmail = replaceRange(userData.email, 2, 5, "*****");

  return (
    <MainLayout>
      <ContentWrapper verfication>
        <HeaderWrapper>
          <SuperHeading alignCenter margin32>
            Email Verification
          </SuperHeading>
          <div className="imageWrapper">
            <img src={EmailIcon} alt="email icon" />
          </div>
          <SubHeading margin32>
            We have sent you a verification code to your email {newEmail}
          </SubHeading>
        </HeaderWrapper>
        <form onSubmit={submitHandler}>
          <VerficationOtp setInputObj={setInputsObj} />
          <Button type="submit" disabled={loading}>
            {loading ? <Loader /> : "Continue"}
          </Button>
        </form>
      </ContentWrapper>
    </MainLayout>
  );
};

export default VerifyEmail;
