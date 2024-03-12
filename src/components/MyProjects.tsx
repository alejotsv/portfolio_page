import Project from './Project';
import TechBackground from './TechBackground';

import projectList from '../assets/projects.json';

const MyProjects = () => {
  const firstProject = projectList.projects[0];

  return (
    <section id="my-projects">
      <div className="projects-header">        
        <p><strong>My work:</strong> discover a selection of projects that showcase my explorations and accomplishments in software development. Each piece represents a step forward in my ongoing journey with technology, highlighting my commitment to learning and innovation.</p>
      </div>
      <div className="projects-content">
        <Project project={firstProject} />
        <TechBackground />
      </div>
    </section>

  );
};

export default MyProjects;