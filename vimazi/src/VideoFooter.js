import React from "react";
import "./VideoFooter.css";
import EventIcon from "@material-ui/icons/Event";
import Ticker from "react-ticker";

function VideoFooter({ photographer, description, eventNameDate }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h2>{photographer}</h2>
        <p>{description} </p>
        <div className="videoFooter_ticker">
          <EventIcon className="videoFooter_icon" />

          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{eventNameDate}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
