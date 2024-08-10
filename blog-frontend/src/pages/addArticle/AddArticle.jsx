import React from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import './addArticle.css'
const styles = {
  title: {
    fontSize: "42px",
    fontWeight: "900",
    "& div:before, & div:after": {
      display: "none",
    },
  },
  image: {
    width: "100%",
  },
  tags: {
    marginTop: "15px",
    marginBottom: "15px",
  },
  editor: {
    marginTop: "30px",
    marginBottom: "30px",
    "& .cm-s-easymde": {
      border: "0",
      fontSize: "22px",
    },
    "& .editor-toolbar": {
      border: "0",
      backgroundColor: "rgba(0, 0, 0, 0.02)",
    },
  },
  buttons: {
    display: "flex",
    "& button": {
      marginRight: "15px",
    },
  },
};

export default function AddArticle() {
  const imageUrl = "";
  const [value, setValue] = React.useState("");

  const handleChangeFile = () => {};

  const onClickRemoveImage = () => {};

  const onChange = React.useCallback((value) => {
    setValue(value);
  }, []);

  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: "400px",
      autofocus: true,
      placeholder: "Введите текст...",
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    []
  );

  return (
    <Paper style={{ padding: 30, margin:30, boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.05)"}}>
      <button className="green">
        Загрузить превью
      </button>
      <input type="file" onChange={handleChangeFile} hidden />
      {imageUrl && (
        <button className="red" onClick={onClickRemoveImage}>
          Удалить
        </button>
      )}
      {imageUrl && (
        <img
          style={styles.image}
          src={`http://localhost:4444${imageUrl}`}
          alt="Uploaded"
        />
      )}
      <br />
      <br />
      <TextField
        style={styles.title}
        variant="standard"
        placeholder="Заголовок статьи..."
        color="success"
        fullWidth
      />
      <TextField
        style={styles.tags}
        variant="standard"
        placeholder="Тэги"
        color="success"
        fullWidth
      />
      <SimpleMDE
        style={styles.editor}
        value={value}
        onChange={onChange}
        options={options}
      />
      <div className="buttons">
        <button className="green">
          Опубликовать
        </button>
        <a href="/">
          <button className="red">Отмена</button>
        </a>
      </div>
    </Paper>
  );
}
