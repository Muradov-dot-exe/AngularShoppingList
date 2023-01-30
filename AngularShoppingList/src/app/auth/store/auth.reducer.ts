import { User } from '../user.model';
import * as AuthActions from './auth.actions';

export interface State {
  user: User;
  authError: string;
  loading: boolean;
}

const initialState = {
  user: null,
  authError: null,
  loading: false,
};

export const authReducer = (
  state = initialState,
  action: AuthActions.AuthActions
): State => {
  switch (action.type) {
    case AuthActions.AuthActionsEnum.AUTHENTICATE_SUCCESS: {
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
        loading: false,
      };
    }

    case AuthActions.AuthActionsEnum.LOGOUT:
      return {
        ...state,
        user: null,
      };

    case AuthActions.AuthActionsEnum.LOGIN_START:

    case AuthActions.AuthActionsEnum.SIGNUP_START:
      return {
        ...state,
        authError: null,
        loading: true,
      };

    case AuthActions.AuthActionsEnum.AUTHENTICATE_FAIL:
      return {
        ...state,
        user: null,
        authError: action.payload,
        loading: false,
      };

    case AuthActions.AuthActionsEnum.CLEAR_ERROR:
      return {
        ...state,
        authError: null,
      };

    default:
      return state;
  }
};
