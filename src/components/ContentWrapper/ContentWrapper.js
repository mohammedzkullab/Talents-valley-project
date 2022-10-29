import styled from "styled-components";

const StyledContentWrapper = styled.div`
  background-color: var(--white);
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 20px;
  padding: 16px 101px 62px 101px;
  text-align: left;
  width: 703px;
  max-width: 703px;
  min-height: 821px;
  margin: auto;
  .head {
    display: flex;
    align-items: center;
    margin-bottom: 64px;
  }
  .head a {
    margin-right: 130px;
  }
  @media only screen and (max-height: 1080px) {
    min-height: 678px;
    width: 670px;
    padding: 16px 80px;
    .head {
      margin-bottom: 30px;
    }
  }
`;
function ContentWrapper({ children, head, backBtn }) {
  return (
    <StyledContentWrapper>
      {backBtn && (
        <div className="head">
          {backBtn}
          {head}
        </div>
      )}
      {!backBtn && head}
      {children}
    </StyledContentWrapper>
  );
}

export default ContentWrapper;
