import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import profilePic from "../../assets/images/profile_pic.jpg";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={profilePic} alt="profile_pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Hi, My name is Yash Gandhi, and I recently graduated from IIT
                BHU with a degree in Metallurgical Engineering. I am originally
                from Dhar, Madhya Pradesh, where I completed my higher secondary
                education.<br></br>
                During my academic journey at IIT BHU, I developed a strong
                interest in web development, data structures & algorithms, and
                problem-solving. During my internship, I worked extensively with
                Socket.IO, OpenAI chatbot integration, and authentication using
                JWT, which significantly enhanced my technical skills. I also
                built several personal projects that deepened my understanding
                of full-stack development.<br></br>
                Beyond academics, I am passionate about dancing and playing
                badminton. I proudly represented my college at the Inter-IIT
                Cultural Meet. I'm enthusiastic about the opportunity to
                contribute to BizAcuity's innovative projects and am eager to
                apply my skills in a dynamic and impactful environment.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
