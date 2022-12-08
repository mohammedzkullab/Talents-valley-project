import styled from "styled-components/macro";
import { LdsDualRing } from "../../../components/Loader/Loader";
import { Heading } from "../../../designsystem/typography";
export const StyledTableLayout = styled.div`
  ${Heading} {
    margin-bottom: 10px;
  }
`;

export const StyledTableWrapper = styled.div`
  background: #fff;
  padding: 0 40px 60px 40px;
  border-radius: 10px;
  box-shadow: 0px 3px 6px #00000029;
  min-height: 70vh;
  max-height: 70vh;
  overflow-y: scroll;
  display: flex;
  align-items: start;
  justify-content: center;
  table {
    width: 100%;
    text-align: left;
    border-collapse: collapse;
    border: 1px solid #ebebeb;
  }
  table tr:first-child {
    background: var(--white);
    position: sticky;
    top: 0;
    z-index: 10;
    th:first-child {
      padding-left: 31px;
    }
  }
  .withBorders tr {
    border: 1px solid #d4d4d4;
  }
  .withBorders tr:first-child {
    border: 1px solid transparent;
    border-bottom: 1px solid #d4d4d4;
  }
  .striped tr:nth-child(even) {
    background: #f3f4f6;
  }
  border: 1px solid transparent;
  .striped :first-child {
  }

  table th {
    background: transparent;
    padding: 16px 0;
    color: var(--gray);
    font-size: 20px;
    font-weight: 500;
  }
  table ${LdsDualRing} {
    margin: auto;
    display: flex;
    align-items: center;
  }
  .table-error {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledFeedback = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;
