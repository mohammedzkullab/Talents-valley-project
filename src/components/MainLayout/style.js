import styled from "styled-components";
export const StyledMainLayout = styled.div`
  background: var(--secondary-color);
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 80px;
  .loader_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    margin: auto;
  }
  @media only screen and (max-height: 1080px) {
  }
`;
