import React from "react";
import "./VideoLogo.css";
import img from "./images/log.png";

function VideoLogo() {
  return (
    <div className="logo">
      <img src={img} alt="" />
    </div>
  );
}

export default VideoLogo;
