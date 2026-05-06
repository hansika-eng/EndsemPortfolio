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
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">

          <div className="text">
            <h1>Hi, I'm Hansika Indukuri 👋</h1>

            <p className="subtitle">
              AI & Full Stack Developer | React • MySQL • Machine Learning
            </p>

            <p className="desc">
              Passionate about building scalable web applications and solving
              real-world problems using code and intelligent systems.
            </p>

            <div className="buttons">

              <a
                href="https://github.com/hansika-eng"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/hansika-indukuri/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://www.codechef.com/users/hansika_62"
                target="_blank"
                rel="noreferrer"
              >
                CodeChef
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>

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
            I’m someone who enjoys figuring out how things work,
            especially when it comes to code.
          </p>

          <p>
            I’m currently pursuing my B.Tech in Artificial Intelligence &
            Data Science, and over time I’ve developed a strong interest
            in building things using Python and web technologies.
          </p>

          <p>
            What started as curiosity slowly turned into spending hours
            experimenting with code, fixing bugs, and learning something
            new every day.
          </p>

          <p>
            I enjoy working with Python, Data Structures, and Frontend
            Development (HTML, CSS, JavaScript, React), and I believe
            the best way to learn is by actually building and improving
            real projects.
          </p>

          <p>
            I like breaking problems down, understanding them step by step,
            and finding simple solutions.
          </p>

          <p>
            Outside of academics, I enjoy exploring new tools, refining my
            projects, and staying curious even when things don’t work
            the first time.
          </p>

        </div>

      </section>

      {/* SKILLS */}
      <section id="skills" className="section">

        <h2>Skills</h2>

        <div className="skills">

          <span>Python</span>
          <span>Java</span>
          <span>React.js</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Machine Learning</span>
          <span>MySQL</span>
          <span>MongoDB</span>
          <span>Scikit-learn</span>
          <span>Git & GitHub</span>

        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">

        <h2>Projects</h2>

        <div className="project-grid">

          <div className="project">
            <h3>DetectX</h3>

            <p>
              ML-powered fake profile detection system using behavioral,
              textual, and metadata analysis.
            </p>

            <div className="project-buttons">
              <a href="/">Live</a>
              <a
                href="https://github.com/hansika-eng"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            </div>
          </div>

          <div className="project">
            <h3>Clockdin</h3>

            <p>
              Student community platform for discovering internships,
              hackathons, workshops, and technical events.
            </p>

            <div className="project-buttons">
              <a href="/">Live</a>
              <a
                href="https://github.com/hansika-eng"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            </div>
          </div>

          <div className="project">
            <h3>KLH UniConnect</h3>

            <p>
              Student platform for academics, placements,
              events, and university updates.
            </p>

            <div className="project-buttons">
              <a href="/">Live</a>
            </div>
          </div>

          <div className="project">
            <h3>Student CRUD App</h3>

            <p>
              React + MySQL application for managing student records
              with CRUD operations.
            </p>

            <div className="project-buttons">
              <a href="/">Live</a>
            </div>
          </div>

          <div className="project">
            <h3>Email Spam Classifier</h3>

            <p>
              Python-based spam email classification system using NLP
              and Machine Learning techniques.
            </p>

            <div className="project-buttons">
              <a href="/">Live</a>
            </div>
          </div>

        </div>

      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="section">

        <h2>Achievements & Certifications</h2>

        <ul className="achievements">

          <li>🏆 Selected for SIH Internal Hackathon – KL University</li>

          <li>🎖 Academic Excellence of the Year (2x Times)</li>

          <li>📜 Oracle Cloud Infrastructure Certified</li>

          <li>🤖 Automation Anywhere Certified</li>

          <li>🍃 MongoDB Associate Developer Certified</li>

        </ul>

      </section>

      {/* CONTACT */}
      <section id="contact" className="section">

        <h2>Contact</h2>

        <p>📧 Email: hemasaihansika@gmail.com</p>

        <p>
          Open to internships, collaborations,
          and software engineering opportunities.
        </p>

      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Hansika Indukuri</p>
      </footer>

    </div>
  );
}

export default App;