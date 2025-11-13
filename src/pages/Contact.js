import { useState } from 'react';

function Contact({ personal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you for your message! (Simulated submission)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <h2 className="text-center mb-5 text-success border-bottom border-success-subtle pb-2">
        Get In Touch
      </h2>
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <p className="lead text-center text-muted mb-4">
            Reach out via email or use the simple form below.
          </p>
          <div className="card shadow-lg p-4 border-0">
            <p className="mb-3 text-center">
              <strong>Direct Email:</strong> <a href={`mailto:${personal.email}`} className="text-success">{personal.email}</a>
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  placeholder="Your Message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-success w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}   

export default Contact;