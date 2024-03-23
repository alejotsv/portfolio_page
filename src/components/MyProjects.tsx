import Project from './Project';

import projects from '../assets/projects.ts';

const MyProjects = () => {  

  return (
    <section id="my-projects">
      <div className="projects-header">                
        <p>Check out a selection of projects that showcase my explorations and accomplishments in software development</p>
      </div>
      <div className="projects-content">
        <div className="projects-grid">
          {projects.map((project) => (
              <Project key={project.title} project={project} />
            ))}
        </div>        
      </div>
    </section>

  );
};

export default MyProjects;