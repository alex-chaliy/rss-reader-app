export interface User {
  _id?: string;
  login: string;
  password?: string;
  salt: string;
  token: string;
}
