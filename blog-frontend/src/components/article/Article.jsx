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
        <img className="preview"
            src="https://www.marthastewart.com/thmb/Vgb9cQSlegZz5fcoSbkkqyHPmHY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/338185-basic-pancakes-09-00b18f8418fd4e52bb2050173d083d04.jpg"
            alt=""
        />
      <UserInfo {...user} additionalText={createdAt} />
      <h2>{title}</h2>
      <ul className="tags">
        {tags.map((name) => (
          <li key={name}>
            <a href={`/tag/${name}`}>#{name}</a>
          </li>
        ))}
      </ul>
      <ul className="postDetails">
        <li>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/014/491/026/small_2x/eye-icon-simple-flat-eye-design-vision-care-concept-wear-glasses-for-a-clear-vision-png.png"
            alt=""
          />
          <span>{viewsCount}</span>
        </li>
        <li>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png"
            alt=""
          />
          <span>{commentsCount}</span>
        </li>
      </ul>
    </div>
  );
}
