import {AUTH_LOGIN, AUTH_REGISTER} from '../constants';
import {State, AuthActionsType} from '../../types/auth';

const initialState: State = {
  token: null,
};

export default function authReducer(
  state = initialState,
  action: AuthActionsType,
) {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        token: action.payload,
      };
    case AUTH_REGISTER:
      return {
        ...state,
      };
    default:
      return state;
  }
}
