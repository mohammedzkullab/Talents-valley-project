import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import LogoHorizintal from "../Logos/LogoHorizintal";
import OutlineButton from "../Button/OutlineButton";
import { StyledNavbar } from "./style";
import { AuthContext } from "../../store/AuthContext";
const Navbar = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const logoutHandler = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <>
      {auth.userData.verifiedEmail && auth.userData.verifiedMobile && (
        <StyledNavbar>
          <div className="nav_logo">
            <LogoHorizintal to="/home" />
          </div>
          <div className="nav_list">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/verfication">Invoices</NavLink>
            <Link to="/" onClick={logoutHandler}>
              logout
            </Link>
            <OutlineButton>create</OutlineButton>
          </div>
        </StyledNavbar>
      )}
    </>
  );
};

export default Navbar;
