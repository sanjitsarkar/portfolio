import { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
const Projects = () => {
  const [loading, setLoading] = useState(false);

  const [projects, setProjects] = useState([]);
  async function getProjects() {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "projects"));
      // querySnapshot.forEach((doc) => {
      //   console.log(`${doc.id} => ${doc.data().title}`);
      setLoading(false);
      setProjects(querySnapshot.docs);
      // });
    } catch (error) {
      setLoading(false);
      console.error("Error", error);
    }
  }
  useEffect(() => {
    getProjects();
  }, []);
  return (
    <main className="codes">
      <section className="section_codes sect">
        <h1 className="title_primary">See Projects</h1>
        <div className="code_list">
        {loading && (<h1 className="loading">Loading...</h1>)}
          {projects &&
            projects.map((project) => <ProjectCard project={project} key={project.id}/>)}
            {!loading && !projects.length && <h1>No project available</h1>}
        </div>
      </section>
    </main>
  );
};

export default Projects;
