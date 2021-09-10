import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../store/AuthStore";
import Logout from "./Logout";
const Header = () => {
  const [show, setShow] = useState(false);
  const { isAuth, setAuth, user, setUser } = useContext(AuthContext);
  useEffect(() => {}, [isAuth]);
  return (
    <header className="header">
      <img
        className={`menu ${show && "hide"}`}
        src="/img/icons/menu.svg"
        onClick={() => setShow(true)}
      />
      <img
        className={`close ${!show ? "hide" : "show"}`}
        src="/img/icons/close.svg"
        onClick={() => setShow(false)}
      />
      <h1 className="title_secondary">
        <Link href="/">Sanjit Sarkar</Link>
      </h1>
      {
        <nav className={`right ${show && "show"}`}>
          <ul>
            <li onClick={() => setShow(false)}>
              <Link href="/">Home</Link>
            </li>
            <li onClick={() => setShow(false)}>
              <Link prefetch={true} href="/projects">
                Projects
              </Link>
            </li>
            <li onClick={() => setShow(false)}>
              <Link prefetch={true} href="/blogs">
                Blogs
              </Link>
            </li>
            {isAuth && (
              <>
                <li onClick={() => setShow(false)}>
                  <Link href="/admin">Dashboard</Link>
                </li>
                <li onClick={() => setShow(false)}>
                  <Logout />
                </li>
              </>
            )}
          </ul>
        </nav>
      }
    </header>
  );
};

export default Header;
