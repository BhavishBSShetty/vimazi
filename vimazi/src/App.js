import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./App.css";
import Video from "./Video";
import Videos from "./VideoIntro";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      async function fetchPosts() {
        const response = await axios.get("/v2/posts");
        setVideos(response.data);
        return response;
      }
      fetchPosts();
    }, 9000);
    // setTimeout(() => {
    //   var vid = document.getElementById("hideit");
    //   vid.play();
    // }, 2000);
  }, []);

  return (
    <div className="app">
      <div className="app_videos" id="hideMe">
        <Videos />
      </div>

      <div className="app_video">
        {videos.map(
          ({
            url,
            photographer,
            description,
            eventNameDate,
            likes,
            shares,
            messages,
            _id,
          }) => (
            <Video
              url={"https://drive.google.com/uc?id=" + url}
              photographer={photographer}
              description={description}
              eventNameDate={eventNameDate}
              likes={likes}
              shares={shares}
              messages={messages}
              _id={_id}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
