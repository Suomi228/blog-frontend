import React from 'react'
import Article from "../../components/article/Article.jsx";
import "./home.css"
export default function Home() {
  return (
    <div className='container-home'>
      {/* <Article/> */}
      <div className="article">
        <Article/>
      </div>
      {/* <Article/> */}
    </div>
  )
}
