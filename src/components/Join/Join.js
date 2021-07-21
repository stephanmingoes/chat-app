import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    if (name.trim() && room.trim()) {
      history.push(`/chat?name=${name.trim()}&room=${room.trim()}`);
    } else {
      alert(`Values must not be empty`);
    }
  };
  return (
    <div className="container">
      <form className="container_inner">
        <h2>Join a Chat</h2>
        <input
          autoFocus
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />{" "}
        <input
          type="text"
          name="room"
          placeholder="Room Name"
          value={room}
          onChange={(e) => {
            setRoom(e.target.value);
          }}
        />{" "}
        <button disabled={!name || !room} type="submit" onClick={handleClick}>
          Enter
        </button>
      </form>
    </div>
  );
};

export default Join;
