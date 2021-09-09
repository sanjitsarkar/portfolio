import Link from 'next/link'
const ProjectCard = ({project}) => {
    const {id} = project.id
    project = project.data()
  return (
    <div className="card code_card" key={id}>
      <h1 className="title_secondary">{project.title}</h1>
      <h4 className="published_date">{project.publishedDate}</h4>
      <p className="desc">{project.desc}</p>
      <div className="cta_btns">
          <div className="btn_primary btn live_project">
        <a  href={project.liveUrl} target="_blank">
          Live Project
        </a> 
        </div>
        <div className="btn_secondary btn view_source">
        <a  href={project.sourceUrl} target="_blank">
          View Source
        </a> 
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
