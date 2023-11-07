import {AuthOptions, User} from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import {usersData} from '@/constants/users-data';
const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId:
        '657725595308-ea5jr6dc4rc0i47p0k5ji107fj8ekhmp.apps.googleusercontent.com',
      clientSecret: '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',
    }),
    Credentials({
      credentials: {
        email: {
          label: 'email',
          type: 'email',
          required: true,
        },
        password: {label: 'password', type: 'password', required: true},
      },
      authorize: async (credentials) => {
        if (credentials?.email || credentials?.password) {
          return null;
        }
        const currentUser = usersData.find(
          (el) => el.email === credentials?.email,
        );
        if (currentUser) {
          const {password, ...userWithoutPassword} = currentUser;
          return userWithoutPassword as User;
        }
        return null;
      },
    }),
  ],
  pages: {
    newUser: '/auth',
    signIn: '/auth/login',
  },
};

export default authConfig;
