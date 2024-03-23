import profile_img from '../assets/asalas_2024-removebg-preview.png';

const AboutMe = () => {
  return (
    <section id="about-me">
      <div className="about-me-text-container">
      <h1>about me</h1>
        <p><em>I like making user experiences that seem effortless. I keep this in mind when creating web applications using ReactJs, back-end projects with Java, or implementing automation testing in Python and JavaScript.</em></p>
        <p><em>I am passionate about soccer. I am a coffee enthusiast. I love the 90s, cinema and all things Marvel.</em></p>        
      </div>
      <div className="about-me-profile-container">
        <img src={profile_img} alt="Profile image"/>
      </div>
    </section>
  );
};

export default AboutMe;
