import { useState, useEffect } from "react";
import { ReactComponent as EyeClosed } from "../../assets/icons/closedEye.svg";
import { ReactComponent as EyeOpen } from "../../assets/icons/openEye.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import "./Input.css";
import { StyledInputWrapper } from "./style";

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
          {errorState && <span className="error_badge">{errorState}</span>}
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
                // ref={refer}
                inputProps={{ name: name }}
                value={value}
                placeholder={placeholder}
                onChange={stateHandler}
                onBlur={(e) => blur(e)}
              />
            </label>
          )}
          {errorState && <span className="error_badge">{errorState}</span>}
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
          {errorState && <span className="error_badge">{errorState}</span>}
        </div>
      )}
    </StyledInputWrapper>
  );
}

export default Input;
