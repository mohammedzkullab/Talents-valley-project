import styled from "styled-components/macro";

export const StyledContentWrapper = styled.div`
  position: relative;
  background-color: var(--white);
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 20px;
  padding: ${({ verfication }) =>
    verfication ? "32px 101px" : "16px 59px 40px 59px"};
  text-align: left;
  width: ${({ signUp }) => (signUp ? "650px" : "600px")};
  ${"" /* max-width: 703px; */}
  margin: auto;
  .head a {
    position: absolute;
    top: 95px;
  }
`;
