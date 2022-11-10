import { useState, useEffect } from "react";
import { ReactComponent as EyeClosed } from "../../assets/icons/closedEye.svg";
import { ReactComponent as EyeOpen } from "../../assets/icons/openEye.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { StyledInputWrapper } from "./style";
import ErrorStatment from "../error/ErrorStatment";

function Input({
  label = "",
  type = "text",
  name = "",
  value,
  refer,
  placeholder = "",
  stateHandler = (f) => f,
  blur = (f) => f,
  errorState,
  backendError,
}) {
  const [passToggle, setPassToggle] = useState(true);
  const inputClass = "input " + ((errorState || backendError) && "error");
  useEffect(() => {
    refer?.current?.focus();
  }, [refer]);

  return (
    <StyledInputWrapper>
      {type === "password" && (
        <>
          <label className="title">
            {label}
            <div className="password-input">
              <input
                type={passToggle ? "password" : "text"}
                name={name}
                ref={refer}
                placeholder={placeholder}
                className={inputClass}
                value={value}
                onChange={(e) => {
                  stateHandler(e);
                }}
                onBlur={(e) => blur(e)}
              />
              {passToggle ? (
                <EyeClosed
                  className="eye"
                  onClick={() => setPassToggle((prev) => !prev)}
                />
              ) : (
                <EyeOpen
                  className="eye"
                  onClick={() => setPassToggle((prev) => !prev)}
                />
              )}
            </div>
          </label>
          {errorState && (
            <ErrorStatment withBadge={false}>{errorState}</ErrorStatment>
          )}
        </>
      )}
      {type === "phone" && (
        <div className="form-Input">
          {label && (
            <label className="title">
              {label}
              <PhoneInput
                country="ps"
                className={inputClass}
                inputProps={{ name: "phoneNumber" }}
                value={value}
                placeholder={placeholder}
                onChange={(country, event, e) => stateHandler(e)}
                excludeCountries={["il"]}
                onBlur={(e) => blur(e)}
              />
            </label>
          )}
          {errorState && (
            <ErrorStatment withBadge={false}>{errorState}</ErrorStatment>
          )}
        </div>
      )}
      {type !== "password" && type !== "phone" && (
        <div className="form-Input">
          {label && (
            <label className="title">
              {label}
              <input
                type={type}
                value={value}
                name={name}
                ref={refer}
                placeholder={placeholder}
                className={inputClass}
                onChange={stateHandler}
                onBlur={(e) => blur(e)}
              />
            </label>
          )}
          {errorState && (
            <ErrorStatment withBadge={false}>{errorState}</ErrorStatment>
          )}
        </div>
      )}
    </StyledInputWrapper>
  );
}

export default Input;
