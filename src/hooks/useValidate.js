/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-useless-escape */
import { useState, useEffect } from "react";
function useValidate(
  email,
  password,
  isTouched,
  setisTouched,
  isSignUp = false,
  firstName,
  lastName
) {
  const [emailError, setEmailError] = useState(null);
  const [passError, setPassError] = useState(null);

  const emailCheck = /[\w\.]+@[\w\.]+\.[\w+]{2,4}/gi;
  const passCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/g;
  // const nameCheck = /^[a-z ,.'-]+$/i;
  useEffect(() => {
    if (isTouched) {
      /* email validation */
      if (email) {
        if (!emailCheck.test(email)) {
          setEmailError("please write valid email");
        } else {
          setEmailError(null);
        }
      } else {
        setEmailError("please Enter an email");
      }
      setisTouched((prev) => !prev);
    }
    /* password validation */
    if (isTouched) {
      if (password) {
        if (!passCheck.test(password)) {
          isSignUp
            ? setPassError("your password is weak")
            : setPassError("please write valid Password");
        } else {
          setPassError(null);
        }
      } else {
        setPassError("please Enter a Password");
      }
      setisTouched((prev) => !prev);
    }
  }, [email, password, isTouched]);

  return [emailError, passError];
}

export default useValidate;

/*
    switch (isTouched) {
      case email:
        if (email) {
          if (!emailCheck.test(email)) {
            setEmailError("please write valid email");
          } else {
            setEmailError(null);
          }
        } else {
          setEmailError("please Enter an email");
        }
        setisTouched(false);
        break;
      case password:
        if (password) {
          if (!passCheck.test(password)) {
            setPassError("please write valid Password");
          } else {
            setPassError(null);
          }
        } else {
          setPassError("please Enter a Password");
        }
        setisTouched(false);
        break;

      default:
        setisTouched(false);
        break;
    }
*/
