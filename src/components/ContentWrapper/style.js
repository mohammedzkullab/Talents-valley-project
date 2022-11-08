import styled from "styled-components/macro";

export const StyledContentWrapper = styled.div`
  background-color: var(--white);
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 20px;
  padding: ${(verfication) =>
    verfication ? "32px 101px" : "16px 59px 40px 59px"};
  text-align: left;
  width: 700px;
  max-width: 703px;
  min-height: 821px;
  margin: auto;

  display: flex;
  justify-content: space-around;
  flex-direction: column;

  .head {
    display: flex;
    align-items: center;
    margin-bottom: 64px;
  }
  .head a {
    margin-right: 130px;
  }
`;
