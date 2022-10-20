import { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { AuthContext } from "../store/AuthContext";

function Home() {
  const auth = useContext(AuthContext);
  const logoutHandler = () => {
    auth.logout();
  };
  return (
    <div>
      Home
      <Link to="/">login</Link>
      <Link to="signup">signup</Link>
      <button onClick={logoutHandler}>logout</button>
    </div>
  );
}

export default Home;
