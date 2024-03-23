import githubIcon from '../assets/github_icon.png';
import linkedinIcon from '../assets/linkedin_icon.png';
import emailIcon from '../assets/email_icon.png';
import avatarIcon from '../assets/ale_icon.svg';

import { useState } from 'react';

const phrases = [
  "I drink a lot of coffee!",
  "¡Hala Madrid!",
  "Team Captain America",
  "Coding is fun!",
  "I love to play guitar",
  "Cat person here",
  "Welcome to the jungle!",
  "React rules",
  "No, Luke, I am your father",
  ""
];

const Contact = () => {
  
  const [dialogVisible, setDialogVisible] = useState(false);
  const [phrase, setPhrase] = useState('Empieza');

  const handleClick = () => {
    if(!dialogVisible){
      setDialogVisible(true);
    }
    const newPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    if(newPhrase === ""){
      setDialogVisible(false);
    }
    setPhrase(newPhrase);
    
  }

  return (
    <footer id="contact" className="contact-me">
      <div className="info-with-icons">
        <div className="contact-info">
          <h2>Get in Touch</h2>          
        </div>
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
      <div className="avatar-container" onClick={handleClick} >
        <img src={avatarIcon} alt="Avatar" className="avatar" />
        {dialogVisible && <div className="dialog-bubble">{phrase}</div>}
      </div>
      <div className="copy-right">
        © {new Date().getFullYear()} Alejandro Salas. All rights reserved.
      </div>
    </footer>
  );
}

export default Contact;