import styled from "styled-components";
const StyledButton = styled.button`
  width: 100%;
  padding: 13px;
  border: none;
  border-radius: var(--border-raduis);
  background-color: var(--primary-color);
  color: var(--white);
  font-size: var(--heading);
  &:disabled {
    opacity: 0.5;
  }
`;

function Button({
  children = "button",
  type = "button",
  disabled = false,
  onClick = (f) => f,
}) {
  return (
    <StyledButton
      type={type}
      className="btn"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
