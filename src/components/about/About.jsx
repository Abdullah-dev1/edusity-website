import { useState } from "react";
import "./about.css";
import ABOUT1 from "../../assets/vid-thumbnail.png";
import ABOUT2 from "../../assets/play-icon.png";
import VIDEO from "../../assets/video.mp4";

const About = () => {
  const [isActive, setIsActive] = useState(false);

  const playerClick = () => {
    setIsActive(!isActive);
  };

  const click = () => {
    setIsActive(false);
  };

  return (
    <section id="about">
      <div className="about container">
        <div className="about__left">
          <img src={ABOUT1} alt="thumbnail" className="about-img" />
          <img
            src={ABOUT2}
            alt="play-icon"
            className="about-icon"
            onClick={playerClick}
          />
        </div>

        <div className="about__right">
          <h5>ABOUT UNIVERSITY</h5>
          <h2>Nurturing Tomorrow's Leaders Today</h2>

          <p>
            Embark on a transformative educational journey with our university's
            comprehensive education programs. Our cutting-edge curriculum is
            designed to empower students with the knowledge, skills, and
            experiences needed to excel in the dynamic field of education.
          </p>
          <p>
            With a focus on innovation, hands-on learning, and personalized
            mentorship, our programs prepare aspiring educators to make a
            meaningful impact in classrooms, schools, and communities.
          </p>
          <p>
            Whether you aspire to become a teacher, administrator, counselor, or
            educational leader, our diverse range of programs offers the perfect
            pathway to achieve your goals and unlock your full potential in
            shaping the future of education.
          </p>
        </div>
      </div>
      <div className={`video__player ${isActive ? "" : "video__player-hide"}`}>
        <div className="video__exit" onClick={click}>
          <video src={VIDEO} autoPlay controls></video>
        </div>
      </div>
    </section>
  );
};

export default About;
