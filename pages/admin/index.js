import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useContext, useEffect } from "react";
import Logout from "../../components/Logout";
import { AuthContext } from "../../store/AuthStore";
const AdminDashboard = () => {
  const { isAuth, setAuth, user, setUser } = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    console.log("auth", isAuth);
    if (!isAuth) {
      router.replace("/admin/login");
    }
  }, [isAuth]);
  return (
    isAuth &&
    <main className="dashboard">
      <section className="card">
        <div className="btn btn_secondary btn_deep_blue">
          <Link href="/admin/projects">Add Project</Link>
        </div>
        <div className="btn_secondary btn btn_crimson">
          <Link href="/admin/blogs">Add Blog</Link>
        </div>
      </section>
    </main>
  );
};

export default AdminDashboard;
