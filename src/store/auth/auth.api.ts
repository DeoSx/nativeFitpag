import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';

import axios from '../../helpers/axios.config';

import {RootState} from '../rootReducer';
import {authLoginAction} from './auth.actions';
import {SignIn, SignUp} from '../../types/auth';

export function authLogin(
  data: SignIn,
): ThunkAction<void, RootState, unknown, Action<string>> {
  return async () => {
    try {
      const res = await axios.post('/auth/login', data);
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  };
}

export function authRegister(
  data: SignUp,
): ThunkAction<void, RootState, unknown, Action<string>> {
  return async () => {
    try {
      const res = await axios.post('/auth/register', data);
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  };
}
