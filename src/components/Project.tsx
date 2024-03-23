interface ProjectProps {
  project:{
    title: string;
    thumbnail: string;
    description: string;
    technologies: string[];
    link: string;
    github: string;
  }
}

const Project = ({project}: ProjectProps) => {

  return(        
    <div className="project-tile">
      {/* <img src={project.thumbnail} alt={project.title} className="project-thumbnail" /> */}
      <h3 className="project-title">{project.title}</h3>
      <ul className="project-technologies">
        {project.technologies.map((tech: string) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>      
      <p className="project-description">{project.description}</p>
      <div className="project-links">
        <a href={project.link} target="_blank" rel="noopener noreferrer">To the App</a>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-btn" >Source code</a>
      </div>
    </div>           
  )
}

export default Project;