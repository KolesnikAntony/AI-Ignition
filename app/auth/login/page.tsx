import React from 'react';
import FormWrapper from '@/components/wrappers/FormWrapper';
import LoginForm from '@/components/forms/LoginForm';
import {EnumPage} from '@/enums/enums';

const Login = () => {
  return (
    <FormWrapper page={EnumPage.LOGIN}>
      <LoginForm />
    </FormWrapper>
  );
};

export default Login;
