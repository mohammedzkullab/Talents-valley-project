import { useState } from "react";
import styled from "styled-components";

const OtpInput = styled.input`
  box-shadow: 0px 2px 2px #00000029;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  width: 60px;
  height: 60px;
  text-align: center;
  font-size: var(--font-size);
`;
function VerficationOtp({ setInputObj }) {
  const [inputs, setInputs] = useState({
    inp1: "",
    inp2: "",
    inp3: "",
    inp4: "",
    inp5: "",
    inp6: "",
  });
  const handleChange = (val, event) => {
    setInputs({ ...inputs, [val]: event.target.value });
  };
  const inputfocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      const next = elmnt.target.tabIndex;
      if (next < 6) {
        elmnt.target.form.elements[next].focus();
      }
      if (next === 6) {
        setInputObj(inputs);
      }
    }
  };

  return (
    <div className="otpInputs_Wrapper">
      <div className="threeInputs">
        <OtpInput
          type="text"
          maxLength="1"
          name="otp1"
          autoComplete="off"
          className="otpInput"
          value={inputs.otp1}
          onChange={(e) => handleChange("inp1", e)}
          tabIndex="1"
          onKeyUp={(e) => inputfocus(e)}
        />
        <OtpInput
          type="text"
          maxLength="1"
          name="otp2"
          autoComplete="off"
          className="otpInput"
          value={inputs.otp2}
          onChange={(e) => handleChange("inp2", e)}
          tabIndex="2"
          onKeyUp={(e) => inputfocus(e)}
        />
        <OtpInput
          type="text"
          maxLength="1"
          name="otp3"
          autoComplete="off"
          className="otpInput"
          value={inputs.otp3}
          onChange={(e) => handleChange("inp3", e)}
          tabIndex="3"
          onKeyUp={(e) => inputfocus(e)}
        />
      </div>
      <div className="threeInputs">
        <OtpInput
          type="text"
          maxLength="1"
          name="otp4"
          autoComplete="off"
          className="otpInput"
          value={inputs.otp4}
          onChange={(e) => handleChange("inp4", e)}
          tabIndex="4"
          onKeyUp={(e) => inputfocus(e)}
        />
        <OtpInput
          type="text"
          maxLength="1"
          name="otp5"
          autoComplete="off"
          className="otpInput"
          value={inputs.otp5}
          onChange={(e) => handleChange("inp5", e)}
          tabIndex="5"
          onKeyUp={(e) => inputfocus(e)}
        />
        <OtpInput
          type="text"
          maxLength="1"
          name="otp6"
          autoComplete="off"
          className="otpInput"
          value={inputs.otp6}
          onChange={(e) => handleChange("inp6", e)}
          tabIndex="6"
          onKeyUp={(e) => inputfocus(e)}
        />
      </div>
    </div>
  );
}

export default VerficationOtp;
