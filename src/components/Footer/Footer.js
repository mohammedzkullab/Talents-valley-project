import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.footer`
  text-align: left;
  width: 610px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 37px;
  a {
    color: var(--black);
    font-size: var(--label);
  }
`;
function Footer() {
  return (
    <StyledFooter>
      <Link>Talents Valley</Link>
      <Link>Contacts</Link>
      <Link>Privacy & Terms</Link>
    </StyledFooter>
  );
}

export default Footer;
