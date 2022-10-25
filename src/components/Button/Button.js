import "./Button.css";
function Button({
  children = "button",
  type = "button",
  disabled = false,
  onClick = (f) => f,
}) {
  return (
    <button type={type} className="btn" disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
