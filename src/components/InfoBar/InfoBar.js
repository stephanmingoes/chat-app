import React from "react";
import onlineIcon from "../Icons/onlineIcon.png";
import closeIcon from "../Icons/closeIcon.png";
const InfoBar = ({ room }) => {
  return (
    <div className="infobar">
      <div className="leftinnercontainer">
        <img className="onlineIcon" src={onlineIcon} alt="" />
        <h3>{room}</h3>
      </div>
      <div className="rightinnercontainer">
        <a href="/">
          <img src={closeIcon} alt="" />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
