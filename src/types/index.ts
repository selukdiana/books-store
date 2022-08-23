
export interface IBook {
  image: string;
  isbn13: string;
  price: string;
  title: string;
  url: string;
  subtitle: string;
  authors?: string;
  publisher?: string;
  isbn10?: string;
  pages?: string;
  year?: string;
  rating?: string;
  desc?: string;
  pdf?: any
}

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