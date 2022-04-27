import React from "react";
import icon1 from "../Assets/icon/private.svg";
import icon2 from "../Assets/icon/Authentic.svg";
import icon3 from "../Assets/icon/heart.svg";
import icon4 from "../Assets/icon/map.svg";
const About = () => {
  return (
    <section className="about container">
      <h2 className="heading-2">What DOWN is All About</h2>
      <div className="about__box">
        <div className="about__box-info">
          <div className="about__icon-box">
            <img src={icon1} alt="Private" />
          </div>
          <span className="about-heading">Private</span>
          <p className="paragraph">
            Your safety is important to us. We make sure your DOWN App
            experience is secure and honest.
          </p>
        </div>
        <div className="about__box-info">
          <div className="about__icon-box">
            <img src={icon2} alt="Authentic" />
          </div>
          <span className="about-heading">Authentic</span>
          <p className="paragraph">
            We have an open mind; sexuality is a healthy, natural, and crucial
            aspect in relationships.
          </p>
        </div>
        <div className="about__box-info">
          <div className="about__icon-box">
            <img src={icon3} alt="Transparent" />
          </div>
          <span className="about-heading">Transparent</span>
          <p className="paragraph">
            We encourage users to be honest to form a real, trustworthy, and
            transparent connection.
          </p>
        </div>
        <div className="about__box-info">
          <div className="about__icon-box">
            <img src={icon4} alt="Global" />
          </div>
          <span className="about-heading">Global</span>
          <p className="paragraph">
            Get to know singles from all over the world!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
