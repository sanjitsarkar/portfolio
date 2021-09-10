import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import { db } from "../../firebase/firebase";
const Projects = () => {
  const [loading, setLoading] = useState(false);

  const [projects, setProjects] = useState([]);
  async function getProjects() {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(
        query(collection(db, "projects"), orderBy("priority"))
      );

      setLoading(false);
      setProjects(querySnapshot.docs);
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
        <h1 className="title_primary title">See Projects</h1>
        <div className="code_list">
          {loading && (
            <h1
              className="title_primary"
              style={{ textAlign: "center", margin: "20vh auto" }}
            >
              Loading...
            </h1>
          )}
          {projects &&
            projects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          {!loading && !projects.length && (
            <h1
              className="title_primary"
              style={{ textAlign: "center", margin: "20vh auto" }}
            >
              No project available
            </h1>
          )}
        </div>
      </section>
    </main>
  );
};

export default Projects;
