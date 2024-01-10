import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Yash Gandhi, a third-year BTech student in Metallurgical
                Engineering at IIT BHU Varanasi, is passionate about web
                development, dancing, and badminton. Beyond the realm of
                metallurgy, Yash showcases a dynamic personality, balancing
                academic rigor with the rhythmic art of dance and the strategic
                sport of badminton.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
