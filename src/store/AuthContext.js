import { useState, createContext } from "react";
export const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (f) => f,
  logout: (f) => f,
});

// const calcRemainingTime = (expirationTime) => {
//   const currentTime = new Date().getTime();
//   const expTime = new Date(expirationTime).getTime();
//   return expTime - currentTime;
// };
const AuthContextProvider = (props) => {
  const initToken = localStorage.getItem("token");
  const [token, setToken] = useState(initToken);
  const isLoggedIn = !!token;
  const login = (token, expTime) => {
    setToken(token);
    localStorage.setItem("token", token);
    // const tokenExpirationTime = calcRemainingTime(expTime);
    // setTimeout(logout, tokenExpirationTime);
  };
  const logout = () => {
    console.log("logging out ...");
    localStorage.removeItem("token");
    setToken(null);
  };
  const contextValue = {
    token: token,
    isLoggedIn: isLoggedIn,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
