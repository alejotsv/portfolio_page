import Project from './Project';
import TechBackground from './TechBackground';

import projects from '../assets/projects.ts';

const MyProjects = () => {  

  return (
    <section id="my-projects">
      <div className="projects-header">        
        <p><strong>My work:</strong> discover a selection of projects that showcase my explorations and accomplishments in software development. Each piece represents a step forward in my ongoing journey with technology, highlighting my commitment to learning and innovation.</p>
      </div>
      <div className="projects-content">
        <div className="projects-grid">
          {projects.map((project) => (
              <Project key={project.title} project={project} />
            ))}
        </div>
        <TechBackground />
      </div>
    </section>

  );
};

export default MyProjects;