import React from 'react'
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import './login.css'
export default function Login() {
  return (
    <Paper className="login">
      <Typography className="title" variant="h4">
        Вход в аккаунт
      </Typography>
      <TextField
        className="field"
        label="E-Mail"
        error
        helperText="Неверно указана почта"
        fullWidth
      />
      <TextField className="field" label="Пароль" fullWidth />
      <button className='green-log'>
        Войти
      </button>
    </Paper>
  )
}
