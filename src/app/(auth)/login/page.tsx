"use client";
import { useForm, SubmitHandler } from "react-hook-form";

type TFormInput = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormInput>();

  const onSubmit: SubmitHandler<TFormInput> = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center w-1/2 bg-slate-500"
    >
      <input
        placeholder="Email"
        {...register("email", {
          required: {
            message: "Email is required",
            value: true,
          },
          pattern: {
            message: "Email is not valid",
            value: /^\S+@\S+$/i,
          },
        })}
        data-testid="login-email-input"
      />
      <input
        type="password"
        placeholder="Password"
        {...register("password", {
          required: {
            message: "Password is required",
            value: true,
          },
          minLength: {
            message: "Password must be at least 6 characters",
            value: 6,
          },
          maxLength: {
            message: "Password must be at most 20 characters",
            value: 20,
          },
        })}
        data-testid="password-email-input"
      />
      <button type="submit" data-testid="submit-login-button">
        Login
      </button>
    </form>
  );
}
