import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import styles from "./Login.module.scss";
import { useForm } from "react-hook-form";
import { loginTC, registerTC } from "../../store/auth-reducer/auth-reducer";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });
  const onSubmit = async (data) => {
    try {
      let res = await dispatch(loginTC(data));
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      } else {
        console.log("some error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  if (isLoggedIn) {
    return <Navigate to={"/"} />;
  }

  return (
    <Paper classes={{ root: styles.root }}>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <Typography classes={{ root: styles.title }} variant="h5">
          Вход в аккаунт
        </Typography>
        <TextField
          className={styles.field}
          label="Email"
          {...register("email", {
            required: "Поле обязательно к заполнению!",
            minLength: {
              value: 5,
              message: "Должно быть минимум 5 символов!",
            },
          })}
          error={errors?.email?.message}
          helperText={errors ? errors?.email?.message : ""}
          fullWidth
        />
        <TextField
          {...register("password", {
            required: "Поле обязательно к заполнению!",
            minLength: {
              value: 5,
              message: "Должно быть минимум 5 символов!",
            },
          })}
          error={errors?.password?.message}
          className={styles.field}
          label="Введите пароль"
          helperText={errors ? errors?.password?.message : ""}
          fullWidth
        />
        <Button size="large" variant="contained" type={"submit"} fullWidth>
          Вход в аккаунт
        </Button>
      </form>
    </Paper>
  );
};
