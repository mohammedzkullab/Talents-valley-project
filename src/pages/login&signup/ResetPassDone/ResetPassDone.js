import { useNavigate } from "react-router-dom";
import BasicLayout from "../../../components/BasicLayout/BasicLayout";
import Button from "../../../components/Button/Button";
import { ReactComponent as DoneCheck } from "../../../assets/icons/checkDone.svg";
import { Heading, SubHeading } from "../../../designsystem/typography";
import { StyledResetPassDone } from "./style";
function ResetPassDone() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <BasicLayout>
      <StyledResetPassDone>
        <DoneCheck />
        <Heading>Password Reset</Heading>
        <SubHeading>
          Your Password has been Successfully Reset. Click Below To Login
        </SubHeading>
      </StyledResetPassDone>

      <Button type="submit" onClick={handleClick}>
        Sign In
      </Button>
    </BasicLayout>
  );
}

export default ResetPassDone;
