import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import Popup from "./Popup";
import axios from "./axios";
function VideoSidebar({ likes, src, description, _id }) {
  const [liked, setliked] = useState(false);
  const [shared, setshared] = useState(false);

  const likePost = () => {
    axios.put("/v2/" + _id + "/like", { action: true });
  };

  const unlikePost = (src) => {
    axios.put("/v2/" + _id + "/like", { action: false });
  };

  return (
    <div className="videoSidebar">
      <div className="videoSidebar_button">
        {liked ? (
          <div>
            <FavoriteIcon
              fontSize="large"
              onClick={(e) => {
                setliked(false);
                likePost();
              }}
            />
            <p>{++likes}</p>
          </div>
        ) : (
          <div>
            <FavoriteBorderIcon
              fontSize="large"
              onClick={(e) => {
                setliked(true);
                unlikePost();
              }}
            />
            <p>{likes}</p>
          </div>
        )}
      </div>
      <div className="videoSidebar_button">
        <ShareIcon fontSize="large" onClick={() => setshared(true)} />
      </div>

      <Popup
        trigger={shared}
        setTrigger={setshared}
        src={src}
        description={description}
      ></Popup>
    </div>
  );
}

export default VideoSidebar;
