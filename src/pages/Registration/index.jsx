import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { Navigate } from "react-router-dom";

import styles from "./Login.module.scss";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerTC } from "../../store/auth-reducer/auth-reducer";

export const Registration = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    if (password !== confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Пароли не совпадают",
      });
    } else {
      dispatch(registerTC(data));
    }
  };

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  if (isLoggedIn) {
    return <Navigate to={"/"} />;
  }

  return (
    <Paper classes={{ root: styles.root }}>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <Typography classes={{ root: styles.title }} variant="h5">
          Создание аккаунта
        </Typography>
        <div className={styles.avatar}>
          <Avatar sx={{ width: 100, height: 100 }} />
        </div>
        <TextField
          className={styles.field}
          label="Имя"
          {...register("fullName", {
            required: "Поле обязательно к заполнению!",
            minLength: {
              value: 5,
              message: "Должно быть минимум 3 символа!",
            },
          })}
          error={errors?.fullName?.message}
          helperText={errors ? errors?.fullName?.message : ""}
          fullWidth
        />
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
        <TextField
          {...register("confirmPassword", {
            required: "Поле обязательно к заполнению!",
            minLength: {
              value: 5,
              message: "Должно быть минимум 5 символов!",
            },
          })}
          error={errors?.confirmPassword?.message}
          className={styles.field}
          label="Подтвердите пароль"
          helperText={errors ? errors?.confirmPassword?.message : ""}
          fullWidth
        />
        <Button size="large" variant="contained" type={"submit"} fullWidth>
          Зарегистрироваться
        </Button>
      </form>
    </Paper>
  );
};
