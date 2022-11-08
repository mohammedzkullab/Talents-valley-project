import { StyledSecondaryButton } from "./style";
const SecondaryButton = ({
  children = "button",
  type = "button",
  disabled = false,
  onClick = (f) => f,
  ...rest
}) => {
  return (
    <StyledSecondaryButton
      type={type}
      className="btn"
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </StyledSecondaryButton>
  );
};

export default SecondaryButton;
