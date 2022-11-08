import styled from "styled-components/macro";

export const StyledErrorStatment = styled.span`
  .error {
    border-color: var(--error) !important;
  }

  display: flex;
  align-items: center;
  margin-top: 5px;
  color: var(--error) !important;
  font-size: var(--sub-font-size);
`;
