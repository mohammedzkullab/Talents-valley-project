import React from "react";
import CheckDone from "../../../components/CheckDone/CheckDone";
import MainLayout from "../../../components/MainLayout/MainLayout";

const MobileDone = () => {
  return (
    <MainLayout>
      <CheckDone
        title="Phone Verification"
        message="Your Phone Number has been Verified Successfully"
        path="/verfication"
        buttonMessage="Continue"
      />
    </MainLayout>
  );
};

export default MobileDone;
