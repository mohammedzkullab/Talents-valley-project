import React, { useContext, useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import MainLayout from "../../../components/MainLayout/MainLayout";
import { SuperHeading, SubHeading } from "../../../designsystem/typography";
import { AuthContext } from "../../../store/AuthContext";
import Button from "../../../components/Button/Button";
import { replaceRange } from "../../../utils/replaceRange";
import PhoneIcon from "../../../assets/images/smartphone.png";
import VerficationOtp from "../../../components/OtpInput/VerficationOtp";
import useFetch from "../../../hooks/useFetch";
import Loader from "../../../components/Loader/Loader";
import { HeaderWrapper } from "../HeaderWrapper";

const VerifyMobile = () => {
  const auth = useContext(AuthContext);
  const [userData] = useState(auth.userData);
  const [otp, setOtp] = useState("");
  const [inputsObj, setInputsObj] = useState("");
  const navigate = useNavigate();
  const url = "https://talents-valley.herokuapp.com/api/user/verify/mobile";
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
    navigate("/verfication/MobileDone");
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
  var newPhone = replaceRange(userData.mobile, 2, 10, "********");
  return (
    <MainLayout>
      <ContentWrapper verfication>
        <HeaderWrapper>
          <SuperHeading alignCenter margin32>
            Phone Verification
          </SuperHeading>
          <div className="imageWrapper">
            <img src={PhoneIcon} alt="email icon" />
          </div>
          <SubHeading margin32>
            We have sent you a verification code to your phone number {newPhone}
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

export default VerifyMobile;
