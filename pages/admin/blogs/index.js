import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useRouter } from "next/dist/client/router";
import dynamic from "next/dynamic";
import { useContext, useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import useInput from "../../../components/hooks/useInput";
import { storage, db } from "../../../firebase/firebase";
import { AuthContext } from "../../../store/AuthStore";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const AdminBlogs = () => {
  const router = useRouter();
  const { isAuth, setAuth, user, setUser } = useContext(AuthContext);
  useEffect(() => {
    if (!isAuth) {
      router.replace("/admin/login");
    }
  }, [isAuth]);

  const [title, setTitle, bindTitle, resetTitle] = useInput("");
  const [editorHtml, setEditorHtml] = useInput("");
  const [theme, setTheme] = useInput("snow");

  const [tags, setTags, bindTags, resetTags] = useInput("");
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const uploadImage = async () => {
    const storageRef = ref(storage, "blogs/" + img.name);

    const snap = await uploadBytes(storageRef, img);
    const downloadURL = await getDownloadURL(snap.ref);
    return downloadURL;
  };
  const addBlog = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (title !== "" && editorHtml !== "") {
      let imgUrl = "";
      if (img) imgUrl = await uploadImage();
      console.log(img);
      const blog = {
        title,
        desc: editorHtml.toString(),
        publishedDate: serverTimestamp(),
        img: imgUrl,
        tags: tags.toString().split(","),
      };
      console.log(blog);
      const result = await addDoc(collection(db, "blogs"), blog);
      router.push("/blogs/" + result.id);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  function handleChange(html) {
    setEditorHtml(html);
  }

  function handleThemeChange(newTheme) {
    if (newTheme === "core") newTheme = null;
    setTheme(newTheme);
  }

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return (
    isAuth && (
      <main className="add_blogs add_section">
        <section>
          {loading ? (
            <h1
              className="title_primary"
              style={{ textAlign: "center", margin: "20vh auto" }}
            >
              Loading...
            </h1>
          ) : (
            <form className="card" onSubmit={(e) => addBlog(e)}>
              <button type="submit">Add Blog</button>

              <div className="row">
                <input
                  type="text"
                  placeholder="Blog title"
                  {...bindTitle}
                  required
                />
                <input
                  type="file"
                  placeholder="Image"
                  onChange={(e) => setImg(e.target.files[0])}
                />
                <input
                  type="text"
                  placeholder="Blog tags separated by comma"
                  {...bindTags}
                />
              </div>

              <ReactQuill
                theme={theme}
                onChange={handleChange}
                value={editorHtml}
                modules={modules}
                formats={formats}
                bounds={".app"}
                placeholder={"Blog Description"}
              />
              {/* <div className="themeSwitcher">
              <label>Theme </label>
              <select onChange={(e) => handleThemeChange(e.target.value)}>
                <option value="snow">Snow</option>
                <option value="bubble">Bubble</option>
                <option value="core">Core</option>
              </select>
            </div> */}
            </form>
          )}
        </section>
      </main>
    )
  );
};

export default AdminBlogs;
