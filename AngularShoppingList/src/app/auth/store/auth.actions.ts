import { Action } from '@ngrx/store';

export enum AuthActionsEnum {
  LOGIN_START = '[Auth] Login Start',
  AUTHENTICATE_SUCCESS = '[Auth] Login',
  AUTHENTICATE_FAIL = '[Auth] Login Fail',
  SIGNUP_START = '[Auth] Signup Start',
  CLEAR_ERROR = '[Auth] Clear Error',
  AUTO_LOGIN = '[Auth] Auto Login',
  LOGOUT = '[Auth] Logout',
}

export class AuthenticateSuccess implements Action {
  readonly type = AuthActionsEnum.AUTHENTICATE_SUCCESS;

  constructor(
    public payload: {
      email: string;
      userId: string;
      token: string;
      expirationDate: Date;
      redirect: boolean;
    }
  ) {}
}

export class Logout implements Action {
  readonly type = AuthActionsEnum.LOGOUT;
}

export class LoginStart implements Action {
  readonly type = AuthActionsEnum.LOGIN_START;

  constructor(public payload: { email: string; password: string }) {}
}

export class AuthenticateFail implements Action {
  readonly type = AuthActionsEnum.AUTHENTICATE_FAIL;

  constructor(public payload: string) {}
}

export class SignupStart implements Action {
  readonly type = AuthActionsEnum.SIGNUP_START;

  constructor(public payload: { email: string; password: string }) {}
}

export class ClearError implements Action {
  readonly type = AuthActionsEnum.CLEAR_ERROR;
}

export class AutoLogin implements Action {
  readonly type = AuthActionsEnum.AUTO_LOGIN;
}

export type AuthActions =
  | AuthenticateSuccess
  | Logout
  | LoginStart
  | AuthenticateFail
  | SignupStart
  | ClearError
  | AutoLogin;
