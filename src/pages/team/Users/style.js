import styled from "styled-components/macro";
export const StyledTableBody = styled.tr`
  td {
    padding: 31px;
    padding-left: 0;
    .team-badge {
      background: #e7eeff;
      border: 1px solid #e7eeff;
      border-radius: 30px;
      font-size: var(--label);
      color: var(--primary-color);
      padding: 2px 18px;
    }
  }
  td:first-child {
    padding: 31px;
    padding-right: 0;
    span {
      background: #8c8c8c;
      border: 1px solid #8c8c8c;
      border-radius: 50%;
      color: #fff;
      display: flex;
      font-size: 16px;
      align-items: center;
      width: 40px;
      justify-content: center;
      height: 40px;
    }
  }
`;
