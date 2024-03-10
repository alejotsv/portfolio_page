import icon from "../assets/ale_icon_circle.svg";
import DownArrow from "./DownArrow";

const Title = () => { 

  return(  
    <div className="main-title-container" id="asalas-title">
      <div className="main-title-icon">
        <img src={icon} alt="Alejandro Salas icon" />
      </div>
      <div className="main-title-text">
        <h1>Alejandro Salas</h1>
        <p>Full-Stack Software Developer</p>
      </div>
      <DownArrow />  
    </div>    
  )
}

export default Title;