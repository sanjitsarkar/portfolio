import {  doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/dist/client/router";
import { useEffect,useState } from "react";
import BlogInfo from "../../components/BlogInfo";
import { db } from "../../firebase/firebase";
import '../../styles/blog.module.css'

const Blog = () => {
  const router = useRouter();
  const {id}  = router.query;
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(false);
  async function getBlog() {
    try {
      setLoading(true);
    const blogReference =  doc(db,'blogs',id)
      const querySnapshot = await getDoc(blogReference);

const docRef = doc(db, "blogs", id);
const docSnap = await getDoc(docRef);

setLoading(false);
if (querySnapshot.exists()) {
      setBlog(querySnapshot.data());
      console.log(querySnapshot.data())
} else {
  console.log("No such document!");
}


    } catch (error) {
      setLoading(false);
      console.error("Error", error);
    }
  }
  useEffect(() => {
      if(id!==undefined)
    getBlog();
  }, [id]);
  return (
    <main className="blog_info">
      <section className="section_blogs sect">
        {loading && <h1 className="loading">Loading...</h1>}
        {blog && <BlogInfo blog={blog} />}
      </section>
    </main>
  );
};

export default Blog;