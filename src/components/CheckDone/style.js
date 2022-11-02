import styled from "styled-components";
import { SubHeading, SuperHeading } from "../../designsystem/typography";
export const StyledCheckDone = styled.div`
  text-align: center;
  margin-top: 63px;
  ${SubHeading} {
    color: var(--gray);
  }
  ${SuperHeading} {
    text-align: center;
    margin: 40px auto;
  }
`;
