/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-useless-escape */
import { useState, useEffect } from "react";
function useValidate(email, password, isTouched) {
  const [emailError, setEmailError] = useState(null);
  const [passError, setPassError] = useState(null);
  const emailCheck = /[\w\.]+@[\w\.]+\.[\w+]{2,4}/gi;
  const passCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/g;
  useEffect(() => {
    if (isTouched) {
      if (email) {
        if (!emailCheck.test(email)) {
          setEmailError("please write valid email");
        } else {
          setEmailError(null);
        }
      } else {
        setEmailError("please Enter an email");
      }
      if (password) {
        if (!passCheck.test(password)) {
          setPassError("please write valid Password");
        } else {
          setPassError(null);
        }
      } else {
        setPassError("please Enter a Password");
      }
    }
  }, [email, password, isTouched]);

  return [emailError, passError];
}

export default useValidate;
