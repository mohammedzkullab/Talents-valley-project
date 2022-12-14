import ErrorStatment from "../error/ErrorStatment";
import { StyledInputWrapper } from "../Input/style";

const TextArea = ({
  label = "",
  name = "",
  value,
  refer,
  placeholder = "",
  stateHandler = (f) => f,
  blur = (f) => f,
  errorState,
  backendError,
  resize = true,
}) => {
  const inputClass =
    "input " +
    (errorState || backendError ? "error" : "") +
    (resize ? " resize" : "");
  return (
    <StyledInputWrapper>
      <div className="form-Input">
        <label className="title">
          {label}
          <textarea
            name={name}
            ref={refer}
            placeholder={placeholder}
            className={inputClass}
            value={value}
            onChange={(e) => {
              stateHandler(e);
            }}
            onBlur={(e) => blur(e)}
          ></textarea>
        </label>

        {errorState && (
          <ErrorStatment withBadge={false}>{errorState}</ErrorStatment>
        )}
      </div>
    </StyledInputWrapper>
  );
};

export default TextArea;
