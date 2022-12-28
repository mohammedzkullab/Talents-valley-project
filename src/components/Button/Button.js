import Loader from "../Loader/Loader";
import { StyledButton } from "./style";

function Button({
  children = "button",
  type = "button",
  disabled = false,
  onClick = (f) => f,
  loading = false,
  ...rest
}) {
  return (
    <StyledButton
      type={type}
      className="btn"
      disabled={loading ? true : null}
      onClick={onClick}
      {...rest}
    >
      {loading ? <Loader /> : children}
    </StyledButton>
  );
}

export default Button;
