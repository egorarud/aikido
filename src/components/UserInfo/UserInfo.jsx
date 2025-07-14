import React from "react";
import "./UserInfo.css";

function UserInfo({ user }) {
  return (
    <div className="user-info">
      <div className="user-avatar">
        <img src={user.avatar} alt={user.name} className="avatar-image" />
      </div>
      <div className="user-details">
        <h2 className="user-name">{user.name}</h2>
        <p className="user-status">{user.status}</p>
      </div>
    </div>
  );
}

export default UserInfo;
