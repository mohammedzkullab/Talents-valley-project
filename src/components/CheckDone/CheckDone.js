import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { ReactComponent as DoneCheck } from "../../assets/icons/checkDone.svg";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import { SuperHeading, SubHeading } from "../../designsystem/typography";
import { StyledCheckDone } from "./style";

const CheckDone = ({ title, message, path, buttonMessage }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };
  return (
    <ContentWrapper>
      <StyledCheckDone>
        <SuperHeading>{title}</SuperHeading>
        <DoneCheck />
        <SubHeading>{message}</SubHeading>
      </StyledCheckDone>

      <Button type="submit" onClick={handleClick}>
        {buttonMessage}
      </Button>
    </ContentWrapper>
  );
};

export default CheckDone;
