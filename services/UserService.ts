import {SingUpValues} from '@/types/form-types';
import {hashSync} from 'bcrypt';
import UserModel from '@/models/UserModel';
class AuthServiceClass {
  async checkExistUser(email: string) {
    return UserModel.findOne({email});
  }
  async registration(user: SingUpValues) {
    const {password,...userWithoutPass} = user;
    const hashPassword = hashSync(password, 7);
    const newUser = new UserModel({...user, password: hashPassword});
    await newUser.save();
    return {...userWithoutPass, id: String(newUser._id)};
  }
}

const AuthService = new AuthServiceClass()
export default AuthService;
