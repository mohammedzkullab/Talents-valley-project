import styled from "styled-components/macro";

export const StyledInvoiceBody = styled.tr`
  td {
    padding: 31px;
    font-size: 18px;
    font-weight: 400;
    padding-left: 0;
  }
  td:first-child {
    padding: 31px;
    padding-right: 0;
  }
  .bold {
    font-size: 18px;
    font-weight: 600;
  }
  .date {
    color: var(--gray);
  }
`;

export const StyledStatus = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: var(--label);
  font-weight: 500;
  color: ${({ itemStatus }) =>
    (itemStatus === "paid" && "#71AC58") ||
    (itemStatus === "cancelled" && "#F50000") ||
    (itemStatus === "sent" && "#4375FF") ||
    ((itemStatus === "pending_approval" ||
      itemStatus === "pending_verification") &&
      "#CDA434") ||
    (itemStatus === "archived" && "#707070")};
  img {
    margin-left: 5px;
  }
`;
