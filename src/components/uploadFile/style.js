import styled from "styled-components/macro";
import { Hint } from "../../designsystem/typography";
export const FileUploader = styled.div`
  ${Hint} {
    color: #6c6969;
    margin-top: 5px;
  }
`;
export const StyledUploadFile = styled.button`
  width: 100%;
  padding: 17px;
  text-align: center;
  background: #ffffff;
  border: 1px solid #bec2c6;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;
export const StyledUploadFileWithFile = styled.div`
  padding: 16px;
  width: 100%;
  text-align: left;
  background: #e2e2e2;
  border: 1px solid ${({ fileError }) => (fileError ? "red" : "#e2e2e2")};
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 15px;
  .details p {
    font-size: 18px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
  }
  .details p span {
    font-size: 12px;
    font-weight: 400;
  }
  .details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .details .cancel {
    font-size: 16px;
    cursor: pointer;
  }
`;
