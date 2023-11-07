import {Model, model, Schema} from 'mongoose';
import {SingUpValues} from '@/types/form-types';

const userSchema = new Schema<SingUpValues>({
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true},
  subscribe: {type: Boolean, required: true},
});
let User;
try {
  User = model<SingUpValues>('User');
} catch {
  User = model<SingUpValues>('User', userSchema);
}

export default User as Model<SingUpValues>;
