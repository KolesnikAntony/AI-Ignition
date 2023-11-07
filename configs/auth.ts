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
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    FBProvider({
      clientId: process.env.FB_ID!,
      clientSecret: process.env.FB_SECRET!,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID!,
      clientSecret: process.env.TWITTER_SECRET!,
    }),
    Credentials({
      id: 'login-cred',
      credentials: {
        email: {
          label: 'email',
          type: 'email',
          required: true,
        },
        password: {label: 'password', type: 'password', required: true},
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Please provide email or password');
        }
        const currentUser = await UserService.checkExistUser(
          credentials?.email,
        );

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
        } else {
          throw new Error('No existing User, please Sign Up');
        }
      },
    }),

    Credentials({
      id: 'signup-cred',
      credentials: {
        first_name: {label: 'first_name', type: 'string', required: true},
        last_name: {label: 'last_name', type: 'string', required: true},
        email: {
          label: 'email',
          type: 'email',
          required: true,
        },
        password: {label: 'password', type: 'password', required: true},
        subscribe: {label: 'subscribe', type: 'boolean', required: true},
      },
      authorize: async (credentials) => {
        if (
          !credentials?.email ||
          !credentials?.password ||
          !credentials?.first_name ||
          !credentials?.last_name
        ) {
          throw new Error('Please provide all data');
        }
        const currentUser = await UserService.checkExistUser(
          credentials?.email,
        );

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
        const newUser = await UserService.registration(payload);
        if (!newUser) {
          throw new Error('Please try again');
        }
        return newUser;
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
  },
};

export default authConfig;
