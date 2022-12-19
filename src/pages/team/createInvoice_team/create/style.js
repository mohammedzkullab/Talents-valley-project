import styled from "styled-components/macro";
import { StyledContentWrapper } from "../../../../components/ContentWrapper/style";
import { StyledInputWrapper } from "../../../../components/Input/style";
import { Heading } from "../../../../designsystem/typography";

export const StyledCreateInvoiceWrapper = styled.div`
  display: flex;
  gap: 40px;
  label {
    font-size: var(--font-size);
    font-weight: 600;
    color: var(--gray);
  }
  textarea {
    resize: none;
    min-height: 135px;
  }
  .resize {
    resize: auto;
  }
  .card-with-heading {
    display: flex;
    flex-direction: column;
  }
  .double-fields {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
    ${StyledInputWrapper} {
      width: 100%;
    }
  }
  .clientInfo {
    margin-bottom: 32px;
  }
  .clientInfo .form-Input {
    margin-bottom: 5px;
  }
  .width-75 {
    width: 75%;
  }
  .width-25 {
    width: 25%;
  }
  .card-with-heading {
    ${Heading} {
      position: sticky;
      top: 90px;
    }
    ${StyledContentWrapper} {
      position: sticky;
      top: 150px;
    }
  }
`;
