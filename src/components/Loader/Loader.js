import styled from "styled-components";
export const LdsDualRing = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;

  &:after {
    content: " ";
    display: block;
    width: ${({ big }) => (big ? "60px" : "20px")};
    height: ${({ big }) => (big ? "60px" : "20px")};
    margin: 0;
    border-radius: 50%;
    border: 3px solid #fff;
    border-color: ${({ invertColor }) =>
      invertColor
        ? "#000 transparent #000 transparent"
        : "#fff transparent #fff transparent"};

    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
function Loader({ invertColor, big }) {
  return <LdsDualRing invertColor={invertColor} big={big}></LdsDualRing>;
}

export default Loader;
