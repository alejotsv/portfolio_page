import profile_img from '../assets/asalas_2024.png';
import DownArrow from './DownArrow';

const AboutMe = () => {
  return (
    <section id="about-me">
      <div className="about-me-text-container">
      <h1>About Me</h1>
        <p>I like making user experiences that seem effortless. I keep this in mind when creating web applications using ReactJs, back-end projects with Java, or implementing automation testing in Python and JavaScript.</p>
        <p>I am passionate about soccer. I am a coffee enthusiast. I love the 90s, cinema and all things Marvel.</p>        
      </div>
      <div className="about-me-profile-container">
        <img src={profile_img} alt="Profile image"/>
      </div>
      <div className="about-me-arrow-container">
        <DownArrow text="See my work" link="#my-projects" />  
      </div>
    </section>
  );
};

export default AboutMe;
