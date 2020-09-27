import {createAction} from 'redux-actions';
import {AUTH_LOGIN, AUTH_REGISTER} from '../constants';

export const authLoginAction = createAction(AUTH_LOGIN);
export const authRegisterAction = createAction(AUTH_REGISTER);
