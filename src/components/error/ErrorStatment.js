import { ReactComponent as ErrorBadge } from "../../assets/icons/errorBadge.svg";
import { StyledErrorStatment } from "./style";
const ErrorStatment = ({ children, withBadge = true }) => {
  return (
    <StyledErrorStatment>
      {withBadge && <ErrorBadge />}
      {children}
    </StyledErrorStatment>
  );
};

export default ErrorStatment;
