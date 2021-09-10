import { useState, createContext } from "react";
import { auth } from "../firebase/firebase";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(false);
  const [user, setUser] = useState(auth.currentUser);
  const state = auth.onAuthStateChanged((data) => {
    if (data === null) setAuth(false);
    else setAuth(true);
  });

  const value = { isAuth, setAuth, user, setUser };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
