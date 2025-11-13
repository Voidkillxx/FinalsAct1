import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects({ projects }) {
  return (
    <>
      <h2 className="text-center mb-5 text-success border-bottom border-success-subtle pb-2">
        Academic Projects
      </h2>
      <div className="row">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}

export default Projects;