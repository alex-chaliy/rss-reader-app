export interface User {
  _id?: string;
  email: string;
  password?: string;
  salt?: string;
  token?: string;
  name?: string;
}
