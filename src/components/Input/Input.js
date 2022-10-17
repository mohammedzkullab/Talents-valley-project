import { useState } from "react";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import "./Input.css";
function Input({
  label = "",
  type = "text",
  required = false,
  placeholder = "",
  stateHandler = (f) => f,
}) {
  const [passToggle, setPassToggle] = useState(true);
  return (
    <div className="input_wrapper">
      {type === "password" && (
        <>
          <label className="title">
            {label}
            <div className="password-input">
              <input
                type={passToggle ? "password" : "text"}
                // required={required}
                placeholder={placeholder}
                className="input"
                onChange={(e) => {
                  stateHandler(e.target.value);
                }}
              />
              {passToggle ? (
                <BsEye
                  className="eye"
                  onClick={() => setPassToggle((prev) => !prev)}
                />
              ) : (
                <BsEyeSlash
                  className="eye"
                  onClick={() => setPassToggle((prev) => !prev)}
                />
              )}
            </div>
          </label>
        </>
      )}
      {type !== "password" && (
        <div className="form-Input">
          {label && (
            <label className="title">
              {label}
              <input
                type={type}
                // required={required}
                placeholder={placeholder}
                className="input"
                onChange={(e) => {
                  stateHandler(e.target.value);
                }}
              />
            </label>
          )}
        </div>
      )}
    </div>
  );
}

export default Input;
