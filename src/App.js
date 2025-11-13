import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import portfolioData from './data';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(portfolioData);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column min-vh-100 bg-light text-dark">
      <Header />
      <main className="container flex-grow-1 py-5">
        <Routes>
          <Route path="/" element={<Home personal={data.personal} />} />
          <Route path="/projects" element={<Projects projects={data.projects} />} />
          <Route path="/skills" element={<Skills skills={data.skills} />} />
          <Route path="/contact" element={<Contact personal={data.personal} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;