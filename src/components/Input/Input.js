import { useState } from "react";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import "./Input.css";
function Input({ label, type = "text", required = false, placeholder = "" }) {
  const [passToggle, setPassToggle] = useState(true);
  return (
    <>
      {label && <label className="title">{label}</label>}
      {type === "password" && (
        <div className="password-input">
          <input
            type={passToggle ? "password" : "text"}
            required={required}
            placeholder={placeholder}
            className="input"
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
      )}
      {type !== "password" && (
        <input
          type={type}
          required={required}
          placeholder={placeholder}
          className="input"
        />
      )}
    </>
  );
}

export default Input;
