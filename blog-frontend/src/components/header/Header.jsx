import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
export default function Header() {
  const isAuth = true;
  return (
    <div className="container-header">
      <Link to="/">
        <h1>Live Blog</h1>
      </Link>
      {isAuth ? (
        <div className="buttons">
            <button className="red">Выйти</button>
          <Link to="articles/create">
            <button>Написать статью</button>
          </Link>
        </div>
      ) : (
        <div className="buttons">
          <Link to="/login">
            <button className="gray">Войти</button>
          </Link>
          <Link to="/register">
            <button>Зарегистрироваться</button>
          </Link>
        </div>
      )}
    </div>
  );
}
