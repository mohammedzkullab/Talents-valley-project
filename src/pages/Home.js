import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input/Input";
import Navbar from "../components/Navbar/Navbar";
// import useNewValidation from "../hooks/useNewValidation";

import { AuthContext } from "../store/AuthContext";

function Home() {
  const auth = useContext(AuthContext);
  const logoutHandler = () => {
    auth.logout();
  };

  return (
    <div>
      <Navbar />
      Home
      <button onClick={logoutHandler}>logout</button>
      <p>hello {auth.userData.firstName}</p>
    </div>
  );
}

export default Home;
