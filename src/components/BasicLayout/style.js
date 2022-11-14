import styled from "styled-components/macro";
export const Layout = styled.div`
  background: var(--secondary-color);
  padding-top: 96px;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media only screen and (max-height: 1080px) {
    padding-top: 50px;
  }
`;
