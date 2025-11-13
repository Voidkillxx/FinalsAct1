function SkillCard({ skill }) {
    return (
      <div className="col-md-4 mb-4">
        <div className="card h-100 shadow-sm border-success">
          <div className="card-body">
            <h5 className="card-title text-success">{skill.name}</h5>
            <p className="card-text text-muted">{skill.description}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default SkillCard;