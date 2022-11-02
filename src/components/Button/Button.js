import { StyledButton } from "./style";

function Button({
  children = "button",
  type = "button",
  disabled = false,
  onClick = (f) => f,
  ...rest
}) {
  return (
    <StyledButton
      type={type}
      className="btn"
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
