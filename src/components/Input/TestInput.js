import { useState, useEffect } from "react";
import { ReactComponent as EyeClosed } from "../../assets/icons/closedEye.svg";
import { ReactComponent as EyeOpen } from "../../assets/icons/openEye.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Input.css";

function Input({
  label = "",
  type = "text",
  name = "",
  value,
  placeholder = "",
  stateHandler = (f) => f,
  blur = (f) => f,
  errorState,
  backendError,
}) {
  const [passToggle, setPassToggle] = useState(true);
  const inputClass = "input " + ((errorState || backendError) && "error");

  return (
    <div className="input_wrapper">
      {type === "password" && (
        <>
          <label className="title">
            {label}
            <div className="password-input">
              <input
                type={passToggle ? "password" : "text"}
                name={name}
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
                country={"ps"}
                className={inputClass}
                name={name}
                placeholder={placeholder}
                onChange={(e) => {
                  stateHandler(e);
                }}
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
                placeholder={placeholder}
                className={inputClass}
                onChange={(e) => {
                  stateHandler(e);
                }}
                onBlur={(e) => blur(e)}
              />
            </label>
          )}
          {errorState && <span className="error_badge">{errorState}</span>}
        </div>
      )}
    </div>
  );
}

export default Input;
