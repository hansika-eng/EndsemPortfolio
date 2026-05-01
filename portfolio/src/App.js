import './App.css';
import profile from "./profile.jpeg";

function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">Hansika's Portfolio</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">

          <div className="text">
            <h1>Hi, I'm Hansika Indukuri 👋</h1>
            <p className="subtitle">
              Full Stack Developer | React • Spring Boot • MySQL
            </p>
            <p className="desc">
              I build clean, scalable, and user-friendly web applications.
            </p>

            <div className="buttons">
              <a href="https://github.com/hansika-eng" target="_blank">GitHub</a>
              <a href="https://www.linkedin.com/in/hansika-indukuri/" target="_blank">LinkedIn</a>
              <a href="https://www.codechef.com/users/hansika_62" target="_blank">CodeChef</a>
            </div>
          </div>

          <img src={profile} alt="profile" className="profile" />

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="card">
          <h2>About Me</h2>
          <p>
            I am a BTech student passionate about full-stack development.
            I specialize in building applications using React, Spring Boot, and MySQL.
            I enjoy solving real-world problems and continuously improving my skills.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section">
        <h2>Skills</h2>
        <div className="skills">
          <span>React</span>
          <span>Java</span>
          <span>Spring Boot</span>
          <span>MySQL</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="project-grid">

          <div className="project">
            <h3>Student CRUD App</h3>
            <p>React + Spring Boot + MySQL full-stack application.</p>
            <div className="project-buttons">
              <a href="/">Live</a>
              <a href="https://github.com/hansika-eng">Code</a>
            </div>
          </div>

          <div className="project">
            <h3>Smart Cart (IoT)</h3>
            <p>IoT-based smart shopping cart system using sensors.</p>
            <div className="project-buttons">
              <a href="/">Details</a>
            </div>
          </div>

        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="section">
        <h2>Achievements</h2>
        <ul className="achievements">
          <li>⭐ Active on CodeChef</li>
          <li>🚀 Built full-stack applications</li>
          <li>🏆 Participated in hackathons</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: hemasaihansika@gmail.com</p>
        <p>Open to internships and collaborations.</p>
      </section>

      <footer>
        <p>© 2026 Hansika Indukuri</p>
      </footer>

    </div>
  );
}

export default App;