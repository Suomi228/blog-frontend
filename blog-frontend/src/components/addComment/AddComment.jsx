import React from 'react'
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import './addComment.css'
export default function AddComment() {
  return (
    <>
      <div className="root">
        <Avatar
          classes="avatar"
          src="https://mui.com/static/images/avatar/5.jpg"
        />
        <div className="form">
          <TextField
            label="Написать комментарий"
            variant="outlined"
            maxRows={10}
            multiline
            fullWidth
            color="success"
          />
          <button className='green'>Отправить</button>
        </div>
      </div>
    </>
  )
}
