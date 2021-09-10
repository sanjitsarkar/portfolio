import { useContext } from "react";
import { auth } from "../firebase/firebase";
import { AuthContext } from "../store/AuthStore";

const Logout = () => {
  const { isAuth, setAuth } = useContext(AuthContext);
  const logout = async () => {
    await auth.signOut();
    setAuth(false);
  };
  return (
    <button
      className="btn btn_primary btn_white logout"
      onClick={() => {
        logout();
      }}
    >
      Logout
    </button>
  );
};

export default Logout;
