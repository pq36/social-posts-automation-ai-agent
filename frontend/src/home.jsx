import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Social Media AI</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
              <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/login">Register</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/chatbot">Chatbot</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/reminders">Reminders</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/posts">VibeNet</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Welcome to My AI Project</h1>
          <p className="lead">Smart content generation and social media automation using GenAI.</p>
          <Link to="/chatbot" className="btn btn-light mt-3 me-2">Get Started</Link>
          <Link to="/login" className="btn btn-outline-light mt-3">Login</Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Key Features</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">AI Caption Generator</h5>
                  <p className="card-text">Create engaging captions for Instagram, LinkedIn, and more with just a few inputs.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Tone Customization</h5>
                  <p className="card-text">Choose between professional, witty, casual, or persuasive tones for your posts.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Optional Auto-Posting</h5>
                  <p className="card-text">Connect your social accounts and schedule posts with a single click (optional).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Home;
