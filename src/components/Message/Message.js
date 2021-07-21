import React from "react";
import ReactEmoji from "react-emoji";

const Message = ({ message: { user, message }, name }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{user}</p>
      <div className="messageBox backgroundBlue">
        <p>{ReactEmoji.emojify(message)}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p>{ReactEmoji.emojify(message)}</p>
      </div>{" "}
      <p className="sentText pl-10">{user}</p>
    </div>
  );
};

export default Message;
