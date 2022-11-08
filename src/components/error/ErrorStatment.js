import { ReactComponent as ErrorBadge } from "../../assets/icons/errorBadge.svg";
import { StyledErrorStatment } from "./style";
const ErrorStatment = ({ children }) => {
  return (
    <StyledErrorStatment>
      <ErrorBadge />
      {children}
    </StyledErrorStatment>
  );
};

export default ErrorStatment;
