import { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  async function getBlogs() {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "blogs"));
      // querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      setLoading(false);

      setBlogs(querySnapshot.docs);
      // });
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
        <h1 className="title_primary">See Blogs</h1>
        <div className="blog_list">
            {loading && (<h1 className="loading">Loading...</h1>)}
          {blogs && blogs.map((blog) => <BlogCard blog={blog} key={blog.id}/>)}
          {!loading && !blogs.length && <h>No blogs available</h>}

        </div>
      </section>
    </main>
  );
};

export default Blogs;
