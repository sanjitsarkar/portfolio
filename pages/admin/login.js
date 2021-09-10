import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/dist/client/router";
import { useContext, useEffect, useState } from "react";
import useInput from "../../components/hooks/useInput";
import { auth } from "../../firebase/auth";
import { AuthContext } from "../../store/AuthStore";

const Login = () => {
  const { isAuth, setAuth, user, setUser } = useContext(AuthContext);
  const [email, setEmail, bindEmail, resetEmail] = useInput("");
  const [password, setPassword, bindPassword, resetPassword] = useInput("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  useEffect(() => {
    if (isAuth) {
      router.replace("/admin");
    }
  }, [isAuth]);
  const auth = getAuth();
  const handleLogin = (e) => {
    setLoading(true);
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const _user = userCredential.user;
        console.log(_user);

        setUser(_user);
        setLoading(false);

        // ...
        router.push("/admin");
      })
      .catch((error) => {
        setLoading(false);

        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  };

  return (
    <main className="add_section">
      <section>
        {loading ? (
          <h1
            className="title_primary"
            style={{ textAlign: "center", margin: "20vh auto" }}
          >
            Loading...
          </h1>
        ) : (
          <form
            className="card"
            onSubmit={(e) => {
              handleLogin(e);
            }}
          >
            <input type="email" placeholder="Email" {...bindEmail} required />
            <input
              type="password"
              placeholder="Password"
              {...bindPassword}
              required
            />
            <button>Login</button>
          </form>
        )}
      </section>
    </main>
  );
};

export default Login;
