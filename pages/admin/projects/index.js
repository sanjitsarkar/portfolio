import { addDoc, collection, Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useRouter } from "next/dist/client/router";
import { useContext, useEffect, useState } from "react";
import useInput from "../../../components/hooks/useInput";
import { storage, db } from "../../../firebase/firebase";
import { AuthContext } from "../../../store/AuthStore";
const AdminProjects = () => {
  const router = useRouter();
  const [title, setTitle, bindTitle, resetTitle] = useInput("");
  const [desc, setDesc, bindDesc, resetDesc] = useInput("");
  const [
    publishedDate,
    setPublishedDate,
    bindPublishedDate,
    resetPublishedDate,
  ] = useInput("");
  const [priority, setPriority, bindPriority, resetPriority] = useInput("");
  const [liveUrl, setLiveUrl, bindLiveUrl, resetLiveUrl] = useInput("");
  const [sourceUrl, setSourceUrl, bindSourceUrl, resetSourceUrl] = useInput("");
  const [techUsed, setTechUsed, bindTechUsed, resetTechUsed] = useInput("");
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const { isAuth, setAuth, user, setUser } = useContext(AuthContext);
  useEffect(() => {
    if (!isAuth) {
      router.replace("/admin/login");
    }
  }, [isAuth]);

  const uploadImage = async () => {
    const storageRef = ref(storage, "projects/" + img.name);

    const snap = await uploadBytes(storageRef, img);
    const downloadURL = await getDownloadURL(snap.ref);
    return downloadURL;
  };
  const addProject = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      title !== "" &&
      desc !== "" &&
      publishedDate !== "" &&
      liveUrl !== "" &&
      sourceUrl !== ""
    ) {
      let imgUrl = "";
      if (img) imgUrl = await uploadImage();
      console.log(img);
      const project = {
        title,
        desc,
        publishedDate: Timestamp.fromDate(new Date(publishedDate)),
        priority: Number(priority),
        liveUrl,
        sourceUrl,
        img: imgUrl,
        techUsed: techUsed.toString().split(","),
      };
      const result = await addDoc(collection(db, "projects"), project);
      router.push("/projects");
      setLoading(false);
    } else {
      setLoading(false);
    }
  };
  return (
    isAuth && (
      <main className="add_project add_section">
        <section>
          {loading ? (
            <h1
              className="title_primary"
              style={{ textAlign: "center", margin: "20vh auto" }}
            >
              Loading...
            </h1>
          ) : (
            <form className="card" onSubmit={(e) => addProject(e)}>
              <input
                type="text"
                placeholder="Project title"
                {...bindTitle}
                required
              />
              <textarea
                type="text"
                placeholder="Project sescription"
                {...bindDesc}
                required
              ></textarea>
              <input
                type="date"
                placeholder="Created sate"
                {...bindPublishedDate}
                required
              />
              <input type="number" placeholder="Priority" {...bindPriority} />
              <input
                type="text"
                placeholder="Project preview link"
                {...bindLiveUrl}
                required
              />
              <input
                type="text"
                placeholder="Project source link"
                {...bindSourceUrl}
                required
              />
              <input
                type="text"
                placeholder="Tech used separated by comma"
                {...bindTechUsed}
              />
              <input
                type="file"
                placeholder="Image"
                onChange={(e) => setImg(e.target.files[0])}
              />
              <button type="submit">Add Project</button>
            </form>
          )}
        </section>
      </main>
    )
  );
};

export default AdminProjects;
