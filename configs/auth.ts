import {AuthOptions, User} from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FBProvider from 'next-auth/providers/facebook';
import TwitterProvider from 'next-auth/providers/twitch';
import Credentials from 'next-auth/providers/credentials';
import UserService from '@/services/UserService';
import {compareSync} from 'bcrypt';
import {SingUpValues} from '@/types/form-types';

const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId:
        '657725595308-ea5jr6dc4rc0i47p0k5ji107fj8ekhmp.apps.googleusercontent.com',
      clientSecret: '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',
    }),
    FBProvider({
      clientId:
        '1757645367992104',
      clientSecret: '65c070316c4d59fd7d24ee8b41d72935',
    }),
    TwitterProvider({
      clientId:
        'O5kDqAm87eEa81EUo2zjX41uj',
      clientSecret: 'ig6l6YdfqN3vaCVINaNi3J5Jhg5MTuaLN8Ko3DzUwGvo1639Nf',
    }),
    Credentials({
      credentials: {
        first_name: {label: 'first_name', type: 'string'},
        last_name: {label: 'last_name', type: 'string'},
        email: {
          label: 'email',
          type: 'email',
          required: true,
        },
        password: {label: 'password', type: 'password', required: true},
        subscribe: {label: 'subscribe', type: 'boolean'},
        type: {type: 'string'},
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Please provide email or password');
        }
        const currentUser = await UserService.checkExistUser(
          credentials?.email,
        );

        if (credentials?.type === 'login') {
          if (currentUser) {
            const isValidPassword = compareSync(
              credentials.password,
              currentUser.password,
            );
            if (isValidPassword) {
              const {password, ...userWithoutPassword} = currentUser;
              return userWithoutPassword as User;
            }
            throw new Error('Invalid password');
          }else{
            throw new Error('No existing User, please Sign Up');
          }
        }
        if (credentials?.type === 'signup') {
          if (currentUser) {
            throw new Error('User already exist');
          }
          if (!credentials?.first_name || !credentials?.last_name) {
            throw new Error('Please provide first name or last name');
          }
          const payload: SingUpValues = {
            email: credentials.email,
            password: credentials.password,
            first_name: credentials.first_name,
            last_name: credentials.last_name,
            subscribe: !!credentials.subscribe,
          };
          return await UserService.registration(payload);
        }
        throw new Error('Some server error');
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
  },
};

export default authConfig;
