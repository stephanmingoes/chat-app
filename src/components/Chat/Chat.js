import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import TextContainer from "../TextContainer/TextContainer";

let socket;
const Chat = ({ location }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState();
  const urlEndpoint = "https://chat-app-backend-sc.herokuapp.com/";

  useEffect(() => {
    socket = io(urlEndpoint);
    const { name, room } = queryString.parse(location.search);

    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert("error");
      }
    });

    return () => {
      socket.emit("disconnection");

      socket.off();
    };
  }, [urlEndpoint, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  useEffect(() => {
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, [users]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <>
      <div className="outer_chat_container">
        <div className="chat_container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>
      </div>
      <TextContainer users={users} />
    </>
  );
};

export default Chat;
