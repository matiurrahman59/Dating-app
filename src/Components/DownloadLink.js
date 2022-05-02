import React from "react";
import playStore from "../Assets/google-play.png";
import appStore from "../Assets/app-store.png";

const DownloadLink = () => {
  return (
    <div className="download-links ">
      <a href="#">
        <img src={playStore} alt="" className="app-icon" />
      </a>
      <a href="#">
        <img src={appStore} alt="" className="app-icon" />
      </a>
    </div>
  );
};

export default DownloadLink;
