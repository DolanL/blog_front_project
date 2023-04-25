import React from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SimpleMDE from "react-simplemde-editor";

import "easymde/dist/easymde.min.css";
import styles from "./AddPost.module.scss";
import { useDispatch } from "react-redux";
import { addPostTC } from "../../store/posts-reducer/posts-reducer";
import { Link } from "react-router-dom";

export const AddPost = () => {
  const imageUrl = "";

  const dispatch = useDispatch();

  const [tags, setTags] = React.useState("");
  const [textValue, setTextValue] = React.useState("");
  const [headerValue, setHeaderValue] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: headerValue,
      text: textValue,
      tags: tags.split(",").map((el) => el.trim()),
    };

    dispatch(addPostTC(data));
  };

  const handleChangeFile = (event) => {};

  const handleChangeHeaderValue = (e) => {
    setHeaderValue(e.currentTarget.value);
  };

  const handleChangeTextValue = (value) => {
    setTextValue(value);
  };

  const handleChangeTagsValue = (e) => {
    setTags(e.currentTarget.value);
  };

  const onClickRemoveImage = () => {};

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
        uniqueId: "my-unique-id",
      },
    }),
    []
  );

  return (
    <Paper style={{ padding: 30 }}>
      <form onSubmit={handleSubmit}>
        <Button variant="outlined" size="large">
          Загрузить превью
        </Button>
        <input type="file" onChange={handleChangeFile} hidden />
        {imageUrl && (
          <Button
            variant="contained"
            color="error"
            onClick={onClickRemoveImage}
          >
            Удалить
          </Button>
        )}
        {imageUrl && (
          <img
            className={styles.image}
            src={`http://localhost:4444${imageUrl}`}
            alt="Uploaded"
          />
        )}
        <br />
        <br />
        <TextField
          classes={{ root: styles.title }}
          variant="standard"
          placeholder="Заголовок статьи..."
          fullWidth
          onChange={handleChangeHeaderValue}
          value={headerValue}
        />
        <TextField
          classes={{ root: styles.tags }}
          variant="standard"
          placeholder="Тэги"
          fullWidth
          onChange={handleChangeTagsValue}
          value={tags}
        />
        <SimpleMDE
          className={styles.editor}
          value={textValue}
          onChange={handleChangeTextValue}
          options={options}
        />
        <div className={styles.buttons}>
          <Button type="submit" size="large" variant="contained">
            Опубликовать
          </Button>
          <Link to="/">
            <Button size="large">Отмена</Button>
          </Link>
        </div>
      </form>
    </Paper>
  );
};
