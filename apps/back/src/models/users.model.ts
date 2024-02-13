import { model, Schema, Document } from 'mongoose';
import { User } from '@interfaces/users.interface';

const UserSchema: Schema = new Schema({
  login: {
    type: String,
    required: true,
    // unique: true
  },
  password: {
    type: String
  },
  salt: {
    type: String,
    required: true
  },
  token: {
    type: String,
    required: true
  },
});

export const UserModel = model<User & Document>('User', UserSchema);
