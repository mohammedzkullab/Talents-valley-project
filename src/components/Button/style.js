import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${(props) => (props?.small && "auto") || "100%"};
  padding: ${(props) => (props?.small && "6px 40px") || "13px"};
  border: none;
  border-radius: var(--border-raduis);
  background-color: ${(props) =>
    (props?.pending && "#D4D4D4") || "var(--primary-color)"};
  color: var(--white);
  font-size: ${(props) =>
    (props?.small && "var(--font-size)") || "var(--heading)"};
  opacity: ${(props) => (props?.disabled ? "0.5 " : "1")};
`;
export const StyledOutlinedButton = styled(StyledButton)`
  border: 1px solid var(--primary-color);
  background: transparent;
  color: var(--primary-color);
  padding: 3px 25px;
  border-radius: 23px;
  font-size: 20px;
`;

export const StyledDisabledButton = styled(StyledButton)`
  opacity: 0.5;
`;

export const StyledSecondaryButton = styled(StyledButton)`
  background: #fff;
  border: 1px solid #e2e2e2;
  border-radius: 7px;
  color: var(--primary-color);
  padding: 6px 29px;
`;
