export interface ISubscribe {
  email: string;
  password: string;
}

export interface ISignInFormInput {
  email: string;
  password: string;
}

export interface ISignUpFormInput {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ITab {
  id: string | number;
  label?: string | number;
}
