import styled from "styled-components/macro";
import { StyledInputWrapper } from "../../../components/Input/style";

export const StyledFlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
  width: 100%;
  ${StyledInputWrapper} {
    width: 50%;
  }
`;
