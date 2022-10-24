import "./Button.css";
function Button({
  children = "button",
  type = "button",
  disabled = false,
  ...rest
}) {
  return (
    <button type={type} className="btn" disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
