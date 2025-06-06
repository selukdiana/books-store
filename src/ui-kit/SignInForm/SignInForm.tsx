import "./SignInForm.css";
import { type SubmitHandler, useForm } from "react-hook-form";
import type { ISignInFormProps } from "../../types/props";
import type { ISignInFormInput } from "../../types";

export const SignInForm = ({ active, setActive }: ISignInFormProps) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<ISignInFormInput>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<ISignInFormInput> = (data: any) => {
    reset();
  };

  return (
    <form
      action=""
      method="post"
      className="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="form__field">
        <input
          type="email"
          placeholder="info@mailaddress.com"
          {...register("email", {
            required: "Required field",
            minLength: {
              value: 5,
              message: "Please enter more than 5 characters",
            },
            maxLength: {
              value: 20,
              message: "Please enter less than 20 characters",
            },
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Entered value does not match the pattern",
            },
          })}
        />
        <span className="error-field">{`${errors?.email?.message || ""}`}</span>
      </div>
      <div className="form__field">
        <input
          type="password"
          placeholder="••••••••••••"
          {...register("password", {
            required: "Required field",
            minLength: {
              value: 6,
              message: "Please enter more than 6 characters",
            },
            maxLength: {
              value: 14,
              message: "Please enter less than 14 characters",
            },
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/,
              message: "Password must contain A-Z, a-z, 0-9",
            },
          })}
        />
        <span className="error-field">{`${
          errors?.password?.message || ""
        }`}</span>
      </div>
      <div className="form__field">
        <input
          type="submit"
          value="Sign In"
          disabled={!isValid}
          onClick={() => {
            setActive(true);
          }}
        />
      </div>
    </form>
  );
};
