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
            src={imageUrl}
            alt={title}
            style={{ borderRadius: "10px 10px 0 0" }}
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
      {children && <div className="content">{children}</div>}
      <div className="bottom">
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
            {isEditable && (
            <div className="editButtons">
              <a href={`/posts/${_id}/edit`}>
                <img src="https://static-00.iconduck.com/assets.00/edit-icon-512x512-v7ak1xco.png" alt="" />
              </a>
                <img src="https://static-00.iconduck.com/assets.00/delete-icon-1864x2048-bp2i0gor.png" alt="" />
            </div>
          )}
      </div>
    </div>
  );
}
