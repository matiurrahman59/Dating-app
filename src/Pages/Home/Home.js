import React, { Fragment } from "react";
// import Header from "../../Components/Header";
import Header from "../../Components/Header";
import bannerimg from "../../Assets/bannerimg.png";
import playStore from "../../Assets/google-play.png";
import appStore from "../../Assets/app-store.png";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <section className="banner__area container">
        <div className="banner__area-img">
          <img src={bannerimg} alt="Datting app" className="banner__img" />
        </div>
        <div className="banner__area-text">
          <h1 className="heading-1">Date on easy mode</h1>
          <p className="paragraph margin-top-sm">
            The honest dating app that puts YOU in control! We encourage users
            to be honest to form a real, trustworthy, and transparent
            connection.
          </p>
          <div className="download-links margin-top-md">
            <a href="#">
              <img src={playStore} alt="" className="app-icon" />
            </a>
            <a href="#">
              <img src={appStore} alt="" className="app-icon" />
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
