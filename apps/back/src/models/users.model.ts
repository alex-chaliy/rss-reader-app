import { model, Schema, Document } from 'mongoose';
import { User } from '@interfaces/users.interface';

const UserSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  salt: {
    type: String,
  },
  token: {
    type: String,
  },
  name: {
    type: String,
  },
});

export const UserModel = model<User & Document>('User', UserSchema);
