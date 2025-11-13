import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card h-100 shadow-sm border-0">
        <div className="card-body">
          <h4 className="card-title text-success">{project.title}</h4>
          <p className="card-text">{project.description}</p>
          <div className="mt-3">
            {project.technologies.map((tech, index) => (
              <span key={index} className="badge bg-secondary text-white me-2 py-2 px-3">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;