const ProjectCard = ({project}) => {
    const {id} = project.id
    project = project.data()
    const date = new Date(project.publishedDate.seconds*1000);  
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear()
  return (
    <div className="card code_card" key={id}>
      <span>
      <h1 className="title_secondary">{project.title}</h1>
      <h4 className="published_date">{month}, {year}</h4>
      </span>
      <p className="desc">{project.desc}</p>
      <div className="cta_btns">
          <div className="btn_primary btn live_project">
        <a rel="noopener noreferrer"  href={project.liveUrl} target="_blank">
          Live Project
        </a> 
        </div>
        <div className="btn_secondary btn view_source">
        <a rel="noopener noreferrer"  href={project.sourceUrl} target="_blank">
          View Source
        </a> 
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
