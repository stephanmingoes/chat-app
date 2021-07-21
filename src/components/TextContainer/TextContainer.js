import React from "react";
import onlineIcon from "../Icons/onlineIcon.png";
const TextContainer = ({ users }) => {
  return (
    <div className="users">
      {users ? (
        <div>
          <h3>Persons Online:</h3>
          <div className="activeContainer">
            <p>
              {users.map(({ name }) => (
                <div key={name} className="activeItem">
                  <img src={onlineIcon} alt="" />
                  {name}
                </div>
              ))}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TextContainer;
