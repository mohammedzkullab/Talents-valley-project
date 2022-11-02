import { StyledOutlinedButton } from "./style";

function Button({
  children = "button",
  type = "button",
  disabled = false,
  onClick = (f) => f,
}) {
  return (
    <StyledOutlinedButton
      type={type}
      className="btn"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledOutlinedButton>
  );
}

export default Button;
