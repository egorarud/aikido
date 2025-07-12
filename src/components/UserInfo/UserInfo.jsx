import React from "react";
import "./UserInfo.css";

function UserInfo({ user }) {
  return (
    <div className="user-info" data-oid="c58sc..">
      <div className="user-avatar" data-oid="c8_i36u">
        <img
          src={user.avatar}
          alt={user.name}
          className="avatar-image"
          data-oid="v.jswuo"
        />
      </div>
      <div className="user-details" data-oid="6ecqms4">
        <h2 className="user-name" data-oid="x-08l-t">
          {user.name}
        </h2>
        <p className="user-status" data-oid=":ln_rl4">
          {user.status}
        </p>
      </div>
    </div>
  );
}

export default UserInfo;
