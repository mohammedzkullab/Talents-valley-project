/* eslint-disable no-useless-escape */
import { useState, useEffect } from "react";
function useValidate({ email, password }) {
  const [emailError, setEmailError] = useState(null);
  const [passError, setPassError] = useState(null);
  const emailCheck = /[\w\.]+@[\w\.]+\.[\w+]{2,4}/gi;
  const passCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/g;
  useEffect(() => {
    if (email) {
      if (!emailCheck.test(email)) {
        setEmailError("please write valid email");
      } else {
        setEmailError("");
      }
    } else {
      setEmailError("please Enter an email");
    }
    if (password) {
      if (!passCheck.test(password)) {
        setPassError("please write valid Password");
      } else {
        setPassError("");
      }
    } else {
      setPassError("please Enter an Password");
    }
  }, [email, password]);

  return [emailError, passError];
}

export default useValidate;
