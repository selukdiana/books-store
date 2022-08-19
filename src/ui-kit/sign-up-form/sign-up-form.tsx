import React, { Dispatch, SetStateAction } from 'react';
import './sign-up-form.css';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormInput {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ISignUpFormProps {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

export const SignUpForm = ({active, setActive}:ISignUpFormProps) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    watch
  } = useForm<IFormInput>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<IFormInput> = (data: any) => {
    console.log(JSON.stringify(data));
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
          {...register('email', {
            required: 'Required field',
            minLength: {
              value: 5,
              message: 'Please enter more than 5 characters',
            },
            maxLength: {
              value: 20,
              message: 'Please enter less than 20 characters',
            },
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Entered value does not match the pattern',
            },
          })}
        />
        <span className="error-field">{`${errors?.email?.message || ''}`}</span>
      </div>
      <div className="form__field">
        <input
          type="password"
          placeholder="••••••••••••"
          {...register('password', {
            required: 'Required field',
            minLength: {
              value: 6,
              message: 'Please enter more than 6 characters',
            },
            maxLength: {
              value: 14,
              message: 'Please enter less than 14 characters',
            },
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/,
              message: 'Password must contain A-Z, a-z, 0-9',
            },
          })}
        />
        <span className="error-field">{`${
          errors?.password?.message || ''
        }`}</span>
      </div>
      <div className="form__field">
        <input
          type="password"
          placeholder="••••••••••••"
          {...register('confirmPassword', {
            required: 'Required field',
            minLength: {
              value: 6,
              message: 'Please enter more than 6 characters',
            },
            maxLength: {
              value: 14,
              message: 'Please enter less than 14 characters',
            },
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/,
              message: 'Password must contain A-Z, a-z, 0-9',
            },
            validate: (val: string) => {
              if (watch('password') != val) {
                return 'Your passwords don\'t match';
              }
            },
          })}
        />
        <span className="error-field">{`${
          errors?.confirmPassword?.message || ''
        }`}</span>
      </div>
      <div className="form__field">
        <input type="submit" value="Sign Up" disabled={!isValid} onClick={() => {
          setActive(true)
        }} />
      </div>
    </form>
  );
};
