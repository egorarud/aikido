import React from "react";
import "./UserInfo.css";

function UserInfo({ user }) {
  return (
    <div className="user-info" data-oid="r9kcqsv">
      <div className="user-avatar" data-oid="o55u73n">
        <img
          src={user.avatar}
          alt={user.name}
          className="avatar-image"
          data-oid="-wchw7c"
        />
      </div>
      <div className="user-details" data-oid="hdfw800">
        <h2 className="user-name" data-oid="0fp1607">
          {user.name}
        </h2>
        <p className="user-status" data-oid="m4aee8x">
          {user.status}
        </p>
      </div>
    </div>
  );
}

export default UserInfo;
