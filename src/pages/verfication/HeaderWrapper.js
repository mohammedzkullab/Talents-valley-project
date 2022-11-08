import styled from "styled-components/macro";
import { SubHeading, SuperHeading } from "../../designsystem/typography";

export const HeaderWrapper = styled.div`
  ${
    "" /* ${SuperHeading} {
    margin-bottom: 20px;
  } */
  }
  .imageWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
  ${SubHeading} {
    color: var(--gray);
  }
`;
