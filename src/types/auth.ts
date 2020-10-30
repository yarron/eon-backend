import { ResponseMutationI } from './index';

export interface LoginResponseMutationI extends ResponseMutationI {
  user: UserI;
}

export interface LoginRequestMutationI {
  login: LoginI;
}

export interface LoginI {
  email: string;
  password: string;
  me: boolean;
}

export interface UserI {
  email: string;
}
