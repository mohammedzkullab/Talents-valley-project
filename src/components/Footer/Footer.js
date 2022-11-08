import { Link } from "react-router-dom";
import { StyledFooter } from "./style";
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
