import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import './subscribe.css';

interface ISubscribe {
  email: string;
  password: string;
}

export const Subscribe = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<ISubscribe>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<ISubscribe> = (data: any) => {
    reset();
  };

  return (
    <div className="subscribe">
      <h2 className="subscribe__title">SUBSCRIBE TO NEWSLETTER</h2>
      <div className="subscribe__subtitle">
        <p>
          Be the first to know about new IT Books, upcoming releases and more
        </p>
      </div>
      <form
        action=""
        method="post"
        className="form subscribe__form"
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
          <span className="error-field">{`${
            errors?.email?.message || ''
          }`}</span>
        </div>
        <div className="form__field">
          <input type="submit" value="Sign In" disabled={!isValid} />
        </div>
      </form>
    </div>
  );
};
