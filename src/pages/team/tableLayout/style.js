import styled from "styled-components/macro";
import { LdsDualRing } from "../../../components/Loader/Loader";
import { Heading } from "../../../designsystem/typography";
export const StyledTableLayout = styled.div`
  ${Heading} {
    margin-bottom: 30px;
  }
`;

export const StyledTableWrapper = styled.div`
  background: #fff;
  padding: 0 40px 60px 40px;
  border-radius: 10px;
  box-shadow: 0px 3px 6px #00000029;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  table {
    width: 100%;

    text-align: left;
    border-collapse: collapse;
    border: 1px solid #ebebeb;
  }
  table tr:nth-child(even) {
    background: #f3f4f6;
  }
  table tr:first-child {
    border: 1px solid transparent;
  }
  table th {
    background: transparent;
    padding: 16px 0;
    color: var(--gray);
    font-size: 20px;
    font-weight: 500;
  }
  table td {
    padding: 31px;
    padding-left: 0;
  }
  table td:first-child {
    padding: 31px;
    padding-right: 0;
    span {
      padding: 10px 13px;
      background: #8c8c8c;
      border: 1px solid #8c8c8c;
      border-radius: 50%;
      color: #fff;
    }
  }
  table ${LdsDualRing} {
    margin: auto;
  }
`;
