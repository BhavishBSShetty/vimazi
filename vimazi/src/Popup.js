import React from "react";
import "./Popup.css";

import {
  FacebookShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  EmailShareButton,
  LinkedinShareButton,
} from "react-share";
import {
  FacebookIcon,
  WhatsappIcon,
  TelegramIcon,
  EmailIcon,
  LinkedinIcon,
} from "react-share";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div class="outer">
          <div class="inner">
            <label onClick={() => props.setTrigger(false)}>Back</label>
          </div>
        </div>
        <div className="icons">
          <FacebookShareButton
            url={props.src}
            quote={props.description}
            className="circle"
          >
            <FacebookIcon logoFillColor="white" round="true"></FacebookIcon>
          </FacebookShareButton>
          <WhatsappShareButton
            url={props.src}
            quote={props.description}
            className="circle"
          >
            <WhatsappIcon logoFillColor="white" round="true"></WhatsappIcon>
          </WhatsappShareButton>
          <TelegramShareButton
            url={props.src}
            quote={props.description}
            className="circle"
          >
            <TelegramIcon logoFillColor="white" round="true"></TelegramIcon>
          </TelegramShareButton>
          <LinkedinShareButton
            url={props.src}
            quote={props.description}
            className="circle"
          >
            <LinkedinIcon logoFillColor="white" round="true"></LinkedinIcon>
          </LinkedinShareButton>
          <EmailShareButton
            url={props.src}
            quote={props.description}
            className="circle"
          >
            <EmailIcon logoFillColor="white" round="true"></EmailIcon>
          </EmailShareButton>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
