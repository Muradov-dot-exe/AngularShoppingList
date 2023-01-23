import { User } from '../user.model';
import * as AuthActions from './auth.actions';

export interface State {
  user: User;
  authError: string;
}

const initialState = {
  user: null,
  authError: null,
};

export const authReducer = (
  state = initialState,
  action: AuthActions.AuthActions
) => {
  switch (action.type) {
    case AuthActions.LOGIN: {
      const user = new User(
        action.payload.email,
        action.payload.userId,
        action.payload.token,
        action.payload.expirationDate
      );
      return {
        ...state,
        authError: null,
        user: user,
      };
    }
    case AuthActions.LOGOUT:
      return {
        ...state,
        user: null,
      };

    case AuthActions.LOGIN_START:
      return {
        ...state,
        authError: null,
      };

    default:
      return state;
  }
};
