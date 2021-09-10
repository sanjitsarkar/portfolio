import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard";
import db from "../../firebase/db";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  async function getBlogs() {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(
        collection(db, "blogs"),
        query("priority")
      );
      setLoading(false);

      setBlogs(querySnapshot.docs);
    } catch (error) {
      setLoading(false);
      console.error("Error", error);
    }
  }
  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <main className="blogs">
      <section className="section_blogs sect">
        <h1 className="title_primary title">See Blogs</h1>
        <div className="blog_list">
          {loading && (
            <h1
              className="loading title_primary"
              style={{ textAlign: "center", margin: "20vh auto" }}
            >
              Loading...
            </h1>
          )}
          {blogs && blogs.map((blog) => <BlogCard blog={blog} key={blog.id} />)}
          {!loading && !blogs.length && (
            <h1
              className="title_primary"
              style={{ textAlign: "center", margin: "20vh auto" }}
            >
              No blogs available
            </h1>
          )}
        </div>
      </section>
    </main>
  );
};

export default Blogs;
