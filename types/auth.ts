export interface LoginSuccess {
  access_token: string;
  token_type: string;
  expire: number;
}

export interface Logout {
  message: 'logout success';
}

export interface Update {
  message: 'update success';
}

export interface User {
  username: string;
  password: string;
}
