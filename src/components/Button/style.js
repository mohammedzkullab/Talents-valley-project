import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${(props) => (props?.small && "auto") || "100%"};

  padding: ${(props) => (props?.small && "6px 40px") || "13px"};
  border: none;
  border-radius: var(--border-raduis);
  background-color: var(--primary-color);
  color: var(--white);
  font-size: ${(props) =>
    (props?.small && "var(--font-size)") || "var(--heading)"}; ;
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
