import React from "react";
import "./userInfo.css";
export default function UserInfo({ avatarUrl, fullName, additionalText }) {
  return (
    <div className="user-content">
      <img
        className="avatar"
        src={avatarUrl || "/noavatar.png"}
        alt={fullName}
      />
      <div className="userDetails">
        <span className="userName">{fullName}</span>
        <span className="additional">{additionalText}</span>
      </div>
    </div>
  );
}
