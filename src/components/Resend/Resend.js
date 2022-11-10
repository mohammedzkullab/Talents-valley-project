/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Reminder from "../Reminder/Reminder";
import useResend from "../../hooks/useResend";
import { StyledResendWrapper } from "./style";

const Resend = ({
  body,
  url,
  textMessage,
  hint,
  token,
  setResendStatus = (f) => f,
}) => {
  const { done, message, resend } = useResend(
    url,
    body,
    "code resent successfully",
    token
  );
  const handleResend = () => {
    resend();
  };
  useEffect(() => {
    setResendStatus({ done, message });
  }, [done, message]);
  return (
    <StyledResendWrapper>
      <Reminder>
        {textMessage}
        <span onClick={handleResend}>{hint}</span>
      </Reminder>
    </StyledResendWrapper>
  );
};

export default Resend;
