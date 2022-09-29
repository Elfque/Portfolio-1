const Project = ({ title, summary, image, link }) => {
  return (
    <div className="project">
      <img src={`./Port/proj/${image}.png`} alt="" className="project_image" />
      <div className="project_bottom">
        <a href={link} target="blank">
          <div className="project_title">{title}</div>
          <div className="project_summary">{summary}</div>
        </a>
      </div>
    </div>
  );
};

export default Project;
