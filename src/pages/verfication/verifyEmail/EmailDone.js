import React from "react";
import CheckDone from "../../../components/CheckDone/CheckDone";
import MainLayout from "../../../components/MainLayout/MainLayout";

const EmailDone = () => {
  return (
    <MainLayout>
      <CheckDone
        title="Email verfication"
        message="Your Email has been Verified Successfully"
        path="/verfication"
        buttonMessage="Continue"
      />
    </MainLayout>
  );
};

export default EmailDone;
