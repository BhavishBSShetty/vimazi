import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import VideoLogo from "./VideoLogo";

function Video({ url, photographer, description, eventNameDate, likes, _id }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <VideoLogo />
      <video
        onClick={handleVideoPress}
        className="video_player"
        loop
        ref={videoRef}
        src={url}
      ></video>
      <VideoFooter
        photographer={photographer}
        description={description}
        eventNameDate={eventNameDate}
      />

      <VideoSidebar
        likes={likes}
        src={url}
        description={description}
        _id={_id}
      />
    </div>
  );
}

export default Video;
