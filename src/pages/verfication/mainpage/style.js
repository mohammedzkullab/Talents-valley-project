import styled from "styled-components/macro";
export const VerficationWrapper = styled.div`
  .completeLater {
    margin-bottom: 16px;
  }
  .contBtn {
    margin-top: 60px;
  }
`;
export const StyledVerficationItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--secondary-color);
  border: 1px solid #e2e2e2;
  border-radius: 7px;
  padding: 24px 30px 24px 20px;
  margin-bottom: 16px;
  .values {
    display: flex;
    flex-direction: column;
  }
  .valid {
    display: flex;
    gap: 5px;
  }

  .label-with-reject-statment {
    display: flex;
    align-items: center;
    gap: 25px;
    span {
      margin: 0;
    }
  }
  .rejected {
    display: flex;
    gap: 8px;
  }
`;
