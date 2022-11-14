import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login&signup/login/Login";
import SignUp from "./pages/login&signup/signup/SignUp";
import Home from "./pages/Home";
import ForgetPass from "./pages/login&signup/ForgotPass/ForgetPass";
import NotFound from "./pages/NotFound";
import { AuthContext } from "./store/AuthContext";
import CodeVerfication from "./pages/login&signup/CodeVerfication/CodeVerfication";
import ResetPass from "./pages/login&signup/ResetPass/ResetPass";
import ResetPassDone from "./pages/login&signup/ResetPassDone/ResetPassDone";
import Verfication from "./pages/verfication/mainpage/verfication";
import VerifyEmail from "./pages/verfication/verifyEmail/VerifyEmail";
import VerifyMobile from "./pages/verfication/verifyMobile/VerifyMobile";
import EmailDone from "./pages/verfication/verifyEmail/EmailDone";
import MobileDone from "./pages/verfication/verifyMobile/MobileDone";
import VerifyId from "./pages/verfication/verifyId/VerifyId";
import VerifyAdress from "./pages/verfication/verifyAddress/VerifyAddress";
import { GlobalStyle } from "./GlobalStyle";
import { MediaQueries } from "./MediaQueries";

import "./App.css";
function App() {
  const auth = useContext(AuthContext);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={auth.isLoggedIn ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          path="signup"
          element={auth.isLoggedIn ? <Navigate to="/home" /> : <SignUp />}
        />
        <Route
          path="home"
          element={
            auth.isLoggedIn && !auth.userData.isBlocked ? (
              auth.userData.verifiedEmail && auth.userData.verifiedMobile ? (
                <Home />
              ) : (
                <Navigate to="/verfication" />
              )
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="forgetPass"
          element={auth.isLoggedIn ? <Navigate to="/" /> : <ForgetPass />}
        />
        <Route
          path="otp"
          element={
            auth.isLoggedIn ? <Navigate to="/home" /> : <CodeVerfication />
          }
        />
        <Route
          path="resetpass"
          element={auth.isLoggedIn ? <Navigate to="/home" /> : <ResetPass />}
        />

        <Route
          path="resetpassdone"
          element={
            auth.isLoggedIn ? <Navigate to="/home" /> : <ResetPassDone />
          }
        />
        <Route
          path="verfication"
          element={
            auth.isLoggedIn &&
            !auth.userData.isBlocked &&
            (!auth.userData.verifiedEmail ||
              !auth.userData.verifiedMobile ||
              auth.userData.verifiedId.status !== "approved" ||
              auth.userData.verifiedAddress.status !== "approved") ? (
              <Verfication />
            ) : (
              <Navigate to="/home" />
            )
          }
        />
        <Route
          path="verfication/verifyEmail"
          element={
            auth.isLoggedIn &&
            !auth.userData.isBlocked &&
            !auth.userData.verifiedEmail ? (
              <VerifyEmail />
            ) : (
              <Navigate to="/verfication" />
            )
          }
        />
        <Route
          path="verfication/EmailDone"
          element={auth.isLoggedIn && !auth.userData.isBlocked && <EmailDone />}
        />
        <Route
          path="verfication/verifyMobile"
          element={
            auth.isLoggedIn && !auth.userData.isBlocked ? (
              <VerifyMobile />
            ) : (
              <Navigate to="/verfication" />
            )
          }
        />
        <Route
          path="verfication/MobileDone"
          element={
            auth.isLoggedIn && !auth.userData.isBlocked && <MobileDone />
          }
        />

        <Route
          path="verfication/verifyId"
          element={
            auth.isLoggedIn &&
            !auth.userData.isBlocked &&
            (auth.userData.verifiedId.status === "not_uploaded" ||
              auth.userData.verifiedId.status === "rejected") ? (
              <VerifyId />
            ) : (
              <Navigate to="/verfication" />
            )
          }
        />
        <Route
          path="verfication/verifyAdress"
          element={
            auth.isLoggedIn && !auth.userData.isBlocked ? (
              <VerifyAdress />
            ) : (
              <Navigate to="/verfication" />
            )
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
      <MediaQueries />
    </div>
  );
}

export default App;
