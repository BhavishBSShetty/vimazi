import React, { useRef } from "react";
import "./VideoIntro.css";

function VideoIntro() {
  const videoRef = useRef(null);
  return (
    <div className="videointro">
      <video
        muted="true"
        autoPlay="true"
        className="video_players"
        id="hideit"
        src="https://drive.google.com/uc?id=1DYhydDi0UNpsZxnEdcFYjEDTzPHjivsg"
        preload="true"
        ref={videoRef}
      ></video>
    </div>
  );
}

export default VideoIntro;
