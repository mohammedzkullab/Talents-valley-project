import styled from "styled-components/macro";
import { Heading, SubHeading } from "../../../designsystem/typography";

export const StyledResetPassDone = styled.div`
  text-align: center;
  margin-top: 63px;

  ${Heading} {
    margin: 30px auto;
    text-align: center;
  }
  ${SubHeading} {
    font-weight: 400;
    text-align: center;
    color: var(--gray);
  }
`;
