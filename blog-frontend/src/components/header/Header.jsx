import React from "react";
import "./header.css";
export default function Header() {
  const isAuth = true;
  return (
    <div className="container">
      <h1>Live Blog</h1>
      {isAuth ? (
        <div className="buttons">
          <button className="red">Выйти</button>
          <button>Написать статью</button>
        </div>
      ) : (
        <div className="buttons">
          <button className="gray">Войти</button>
          <button>Зарегистрироваться</button>
        </div>
      )}
    </div>
  );
}
