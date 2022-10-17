import { useState } from "react";
// import { BsEyeSlash, BsEye } from "react-icons/bs";
import EyeClosed from "../../assets/icons/closedEye.svg";
import EyeOpen from "../../assets/icons/openEye.svg";
import "./Input.css";
function Input({
  label = "",
  type = "text",
  required = false,
  placeholder = "",
  stateHandler = (f) => f,
  blur = (f) => f,
  errorState,
}) {
  const [passToggle, setPassToggle] = useState(true);
  const inputClass = "input " + (errorState && "error");
  return (
    <div className="input_wrapper">
      {type === "password" && (
        <>
          <label className="title">
            {label}
            <div className="password-input">
              <input
                type={passToggle ? "password" : "text"}
                placeholder={placeholder}
                className={inputClass}
                onChange={(e) => {
                  stateHandler(e.target.value);
                }}
                onBlur={() => blur((prev) => !prev)}
              />
              {passToggle ? (
                <img
                  src={EyeClosed}
                  alt="closed eye"
                  className="eye"
                  onClick={() => setPassToggle((prev) => !prev)}
                />
              ) : (
                <img
                  src={EyeOpen}
                  alt="open eye"
                  className="eye"
                  onClick={() => setPassToggle((prev) => !prev)}
                />
              )}
            </div>
          </label>
          {errorState && <span className="error_badge">{errorState}</span>}
        </>
      )}
      {type !== "password" && (
        <div className="form-Input">
          {label && (
            <label className="title">
              {label}
              <input
                type={type}
                placeholder={placeholder}
                className={inputClass}
                onChange={(e) => {
                  stateHandler(e.target.value);
                }}
                onBlur={() => blur((prev) => !prev)}
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
