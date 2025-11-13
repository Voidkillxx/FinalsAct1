import { Link } from 'react-router-dom';

function Home({ personal }) {
  return (
    <div className="p-5 bg-white rounded-3 text-center shadow-sm">
      <h1 className="display-4 fw-bold text-dark mb-3">
        Hello, I'm {personal.name}
      </h1>
      <p className="lead text-secondary mb-4">{personal.headline}</p>
      <p className="mb-5">
        I am an CS student focusing on building functional applications using Java and managing data with MySQL. Let's build something great.
      </p>
      <Link className="btn btn-success btn-lg me-3" to="/projects">
        My Work
      </Link>
      <Link className="btn btn-outline-secondary btn-lg" to="/contact">
        Contact Me
      </Link>
    </div>
  );
}

export default Home;
