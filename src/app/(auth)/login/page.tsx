"use client";
import { useLoginMutation } from "@/redux/apis/auth";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const [loginFunc, { error }] = useLoginMutation();

  const onSubmit: SubmitHandler<TFormInput> = async (data) => {
    const resp = await loginFunc(data);
    if (resp.data) {
      router.push("/");
    } else {
      console.log(resp);
    }
  };

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
      <p>{errors.email?.message}</p>
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
      <p>{errors.password?.message}</p>
      {typeof error == "string" && <p>{error}</p>}
      <button type="submit" data-testid="submit-login-button">
        Login
      </button>
    </form>
  );
}
