import React from 'react';
import './header.css';
export default function Header() {
  return (
    <div className='container'>
      <h1>Live Blog</h1>
      <div className="buttons">
        <button className='login'>Войти</button>
        <button className='register'>Зарегистрироваться</button>
      </div>
    </div>
  )
}
