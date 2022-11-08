/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useCallback } from "react";
import { useNavigate } from "react-router";
import Button from "../../../components/Button/Button";
import { Title, SubParagraph } from "../../../designsystem/typography";
import { StyledVerficationItem } from "./style";
import { ReactComponent as CheckDone } from "../../../assets/icons/checkDone.svg";
import { ReactComponent as ToolTipIcon } from "../../../assets/icons/tooltipi.svg";
import useFetch from "../../../hooks/useFetch";
import { AuthContext } from "../../../store/AuthContext";
import Loader from "../../../components/Loader/Loader";
import Tooltip from "../../../components/ToolTip/Tooltip";
import SecondaryButton from "../../../components/Button/SecondaryButton";
const VerficationItem = ({
  label = "",
  value = "",
  isVerfied = false,
  itemStatus = "",
  to = "",
  path,
  showFeedback = true,
}) => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const clickHandler = () => {
    path && fetchData();
    !path && navigate(`${to}`);
  };
  const url = `https://talents-valley.herokuapp.com/api/user/${path}`;
  const options = {
    method: "post",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${auth.token}`,
    },
  };
  const dataSync = useCallback(() => {
    navigate(`${to}`);
  }, []);
  const { loading, error, fetchData } = useFetch(url, options, dataSync);
  const btnRender = () => {
    if (isVerfied === false && !itemStatus.status) {
      return (
        <Button small onClick={clickHandler}>
          {loading ? <Loader /> : "Verify"}
        </Button>
      );
    } else if (itemStatus.status === "pending") {
      return (
        <Button small pending disabled={true} onClick={clickHandler}>
          pending
        </Button>
      );
    } else if (itemStatus.status === "rejected") {
      return (
        <SecondaryButton small pending onClick={clickHandler}>
          try again
        </SecondaryButton>
      );
    } else {
      return (
        <CheckDone width="41px" height="41px" style={{ marginRight: "30px" }} />
      );
    }
  };

  return (
    <StyledVerficationItem>
      <div className="values">
        <div className="label-with-reject-statment">
          <Title>{label}</Title>

          {itemStatus.status === "rejected" && (
            <div className="rejected">
              <span className="error_badge">rejected</span>
              <Tooltip
                content={itemStatus.disapproveReason.reason}
                direction="top"
                delay={100}
              >
                <ToolTipIcon />
              </Tooltip>
            </div>
          )}
        </div>
        <div className="valid">
          <SubParagraph>{value}</SubParagraph>
          {showFeedback && (
            <SubParagraph>
              <span
                className="validateStatment"
                style={{
                  color: isVerfied ? "#19AB16" : "#E80707",
                }}
              >
                {isVerfied ? "(verified)" : "(not verified)"}
              </span>
            </SubParagraph>
          )}
        </div>
      </div>
      <div className="checkDone">
        {btnRender()}
        {error && !error.key && (
          <span className="error_badge">
            {/* <ErrorBadge /> */}
            {error.message}
          </span>
        )}
      </div>
    </StyledVerficationItem>
  );
};

export default VerficationItem;
