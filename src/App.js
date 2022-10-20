import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import { AuthContext } from "./store/AuthContext";
import "./GeneralStyle.css";
import "./App.css";

function App() {
  const auth = useContext(AuthContext);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={auth.isLoggedIn ? <Navigate to="home" /> : <Login />}
        />
        <Route
          path="signup"
          element={auth.isLoggedIn ? <Navigate to="home" /> : <SignUp />}
        />
        {auth.isLoggedIn && <Route path="home" element={<Home />} />}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
