import styled from "styled-components";
const LdsDualRing = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;

  &:after {
    content: " ";
    display: block;
    width: 20px;
    height: 20px;
    margin: 0;
    border-radius: 50%;
    border: 3px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
function Loader() {
  return <LdsDualRing></LdsDualRing>;
}

export default Loader;
