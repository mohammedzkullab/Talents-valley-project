import { useState } from "react";
import { ReactComponent as EyeClosed } from "../../assets/icons/closedEye.svg";
import { ReactComponent as EyeOpen } from "../../assets/icons/openEye.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Input.css";
function Input({
  label = "",
  type = "text",
  required = false,
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
                placeholder={placeholder}
                className={inputClass}
                onChange={(e) => {
                  stateHandler(e.target.value);
                }}
                onBlurCapture={() => blur((prev) => !prev)}
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
                placeholder={placeholder}
                onChange={stateHandler}
                onBlurCapture={() => blur((prev) => !prev)}
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
                placeholder={placeholder}
                className={inputClass}
                onChange={(e) => {
                  stateHandler(e.target.value);
                }}
                onBlurCapture={() => blur((prev) => !prev)}
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
