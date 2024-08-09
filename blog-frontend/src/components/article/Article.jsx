import React from "react";
import "./article.css";
import UserInfo from "../userInfo/UserInfo.jsx";
export default function Article({
    _id,
    title,
    createdAt,
    imageUrl,
    user,
    viewsCount,
    commentsCount,
    tags,
    children,
    isFullPost,
    isLoading,
    isEditable,
  }) {
  return (
    <div className="container-article">
      <img
        src="https://www.marthastewart.com/thmb/Vgb9cQSlegZz5fcoSbkkqyHPmHY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/338185-basic-pancakes-09-00b18f8418fd4e52bb2050173d083d04.jpg"
        alt=""
      />
      <UserInfo {...user} additionalText={createdAt} />
    </div>
  );
}
