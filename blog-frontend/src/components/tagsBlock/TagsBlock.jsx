import React from 'react'
import './tagsBlock.css'
export default function TagsBlock({ tags}) {
  return (
    <div className='container-tags'>
      <h1>Тэги</h1>
        <div className='tags-self'>
          {tags.map((name) => (
            <li key={name}>
              <a href={`/tag/${name}`}>#{name}</a>
            </li>
          ))}
        </div>
    </div>
  )
}
