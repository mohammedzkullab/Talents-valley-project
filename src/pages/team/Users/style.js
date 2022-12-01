import React from "react";
import styled from "styled-components/macro";
export const StyledTableBody = styled(React.Fragment)`
  td {
    padding: 31px;
    padding-left: 0;
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
