import githubIcon from '../assets/github_icon.png';
import linkedinIcon from '../assets/linkedin_icon.png';
import emailIcon from '../assets/email_icon.png';


const Contact = () => {
  return (
    <footer className="contact-me">
      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p>Interested in collaborating or discussing a project? Feel free to connect with me.</p>
        <div className="contact-icons">
          <a href="https://github.com/alejotsv" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://linkedin.com/in/alejotsv" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="mailto:asalas.dev@gmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
        </div>
      </div>
      <div className="copy-right">
        © {new Date().getFullYear()} Alejandro Salas. All rights reserved.
      </div>
    </footer>
  );
}

export default Contact;