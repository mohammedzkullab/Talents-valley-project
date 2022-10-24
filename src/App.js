import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import ForgetPass from "./pages/ForgetPass";
import NotFound from "./pages/NotFound";
import { AuthContext } from "./store/AuthContext";
import "./GeneralStyle.css";
import "./App.css";
import CodeVerfication from "./pages/CodeVerfication";
import ResetPass from "./pages/ResetPass";
import ResetPassDone from "./pages/ResetPassDone";

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
        <Route
          path="home"
          element={auth.isLoggedIn ? <Home /> : <Navigate to="/" />}
        />
        <Route
          path="forgetPass"
          element={auth.isLoggedIn ? <Navigate to="/" /> : <ForgetPass />}
        />
        <Route
          path="otp"
          element={
            auth.isLoggedIn ? <Navigate to="home" /> : <CodeVerfication />
          }
        />
        <Route
          path="resetpass"
          element={auth.isLoggedIn ? <Navigate to="home" /> : <ResetPass />}
        />

        <Route
          path="resetpassdone"
          element={auth.isLoggedIn ? <Navigate to="home" /> : <ResetPassDone />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
