import React from 'react';
import SkillCard from '../components/SkillCard';

function Skills({ skills }) {
  return (
    <>
      <h2 className="text-center mb-5 text-success border-bottom border-success-subtle pb-2">
        Core Technical Skills
      </h2>
      <div className="row">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </>
  );
}

export default Skills;