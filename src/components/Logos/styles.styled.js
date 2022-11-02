import styled from "styled-components";
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 65px;
  @media only screen and (max-height: 1080px) {
    margin-bottom: 30px;
  }
`;

export const StyledLogoHorizintal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  img {
    width: 96px;
  }
  p {
    font-size: 20px;
    color: var(--black);
    font-weight: 600;
    margin-left: 10px;
  }
`;
