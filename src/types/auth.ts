import {AUTH_LOGIN, AUTH_REGISTER} from './../store/constants';

export type SignIn = {
  username: string;
  password: string;
};

export type SignUp = {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

interface Login {
  type: typeof AUTH_LOGIN;
  payload: SignIn;
}

interface Register {
  type: typeof AUTH_REGISTER;
  payload: SignUp;
}

export type State = {
  token: string | null;
};

export type AuthActionsType = Login | Register;
