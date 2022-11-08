import styled from "styled-components/macro";

export const StyledResendWrapper = styled.div`
  .error_badge {
    text-align: center;
    color: var(--error);
  }
  span {
    cursor: pointer;
    opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
    ${"" /* cursor: ${(disabled) => (disabled ? "not-allowed" : "pointer")}; */}
  }
`;
