import "./about.css";
import meinswitz from "../../img/meinswitz.png";
import sdsulogo from "../../img/sdsulogo.png";

const About = () => {
    return (
      <div className="a">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img
              src={meinswitz}
              alt=""
              className="a-img"
            />
          </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
            Passionate about all things technology
          </p>
          <p className="a-desc">
            The industry of technology is constantly evolving and never certain.
            This raises the importance of one's ability to adapt and learn these 
            fundamental concepts. My passion for programming/technology has allowed me to 
            refine my skills and achieve profiency in several areas relevant to my degree.
          </p>
          <div className="a-sdsulogo">
            <img src={sdsulogo} alt="" className="a-sdsulogo-img" />
            <div className="a-sdsulogo-texts">
              <h4 className="a-sdsulogo-title">San Diego State University</h4>
              <p className="a-sdsulogo-desc">
                Pursuing a Bachelor's degree in Computer Science with an expected graduation
                date of May 2024.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;