/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useCallback } from "react";
import { useNavigate } from "react-router";
import Button from "../../../components/Button/Button";
import { Title, SubParagraph } from "../../../designsystem/typography";
import { StyledVerficationItem } from "./style";
import { ReactComponent as CheckDone } from "../../../assets/icons/checkDone.svg";
import useFetch from "../../../hooks/useFetch";
import { AuthContext } from "../../../store/AuthContext";
import Loader from "../../../components/Loader/Loader";

const VerficationItem = ({
  label = "",
  value = "",
  isVerfied = false,
  to = "",
  path = "",
  showFeedback = true,
}) => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const clickHandler = () => {
    fetchData();
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

  return (
    <StyledVerficationItem>
      <div className="values">
        <Title>{label}</Title>
        <div className="valid">
          <SubParagraph>{value}</SubParagraph>
          {showFeedback && (
            <SubParagraph>
              <span
                className="validateStatment"
                style={{ color: isVerfied ? "#19AB16" : "#E80707" }}
              >
                {isVerfied ? "(verified)" : "(not verified)"}
              </span>
            </SubParagraph>
          )}
        </div>
      </div>
      <div className="checkDone">
        {!isVerfied ? (
          <Button small onClick={clickHandler}>
            {loading ? <Loader /> : "Verify"}
          </Button>
        ) : (
          <CheckDone
            width="41px"
            height="41px"
            style={{ marginRight: "30px" }}
          />
        )}
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
