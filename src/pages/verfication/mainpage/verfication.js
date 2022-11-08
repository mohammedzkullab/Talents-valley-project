import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import MainLayout from "../../../components/MainLayout/MainLayout";
import {
  SuperHeading,
  SubHeading,
  Hint,
} from "../../../designsystem/typography";
import VerficationItem from "./VerficationItem";
import { VerficationWrapper } from "./style";
import { AuthContext } from "../../../store/AuthContext";
import DisabledButton from "../../../components/Button/DisabledButton";
import Button from "../../../components/Button/Button";
import useGetUserData from "../../../hooks/useGetUserData";
function replaceRange(s, start, end, substitute) {
  return s.substring(0, start) + substitute + s.substring(end);
}

const Verfication = () => {
  const auth = useContext(AuthContext);
  const [userData] = useState(auth.userData);
  const navigate = useNavigate();
  var newEmail = replaceRange(userData.email, 2, 5, "*****");
  var newPhone = replaceRange(userData.mobile, 4, 10, "*******");
  const { userError, userFetchData } = useGetUserData();
  useEffect(() => {
    console.log("first");
    userFetchData();
  }, []);
  return (
    <MainLayout>
      <ContentWrapper verfication>
        <SuperHeading alignCenter margin32>
          Verfication
        </SuperHeading>
        <SubHeading margin32>
          To use our services, We need to verify your account
        </SubHeading>
        <VerficationWrapper>
          <VerficationItem
            label="Email Address"
            value={newEmail}
            isVerfied={userData.verifiedEmail}
            path="send-code-email"
            to="/verfication/verifyEmail"
          />
          <VerficationItem
            label="Phone Number"
            value={newPhone}
            path="send-code-mobile"
            isVerfied={userData.verifiedMobile}
            to="/verfication/verifyMobile"
          />
          <div className="completeLater">
            <Hint>You can complete the 2 following tasks later</Hint>
          </div>
          <VerficationItem
            label="ID Verification"
            value={"Identity card - Driver license - Passport"}
            itemStatus={userData.verifiedId}
            isVerfied={userData.verifiedId.status === "approved"}
            to="/verfication/verifyId"
            showFeedback={false}
          />
          <VerficationItem
            label="Address Verification"
            value={"Phone, Electricity,Water Bill-Bank statement"}
            itemStatus={userData.verifiedAddress}
            isVerfied={userData.verifiedAddress.status === "approved"}
            to="/verfication/verifyAdress"
            showFeedback={false}
          />
          {userData.verifiedEmail && userData.verifiedMobile ? (
            <Button className="contBtn" onClick={() => navigate("/home")}>
              countinue
            </Button>
          ) : (
            <DisabledButton className="contBtn">countinue</DisabledButton>
          )}
        </VerficationWrapper>
      </ContentWrapper>
    </MainLayout>
  );
};

export default Verfication;
