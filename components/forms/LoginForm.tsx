'use client';

import React from 'react';
import {Grid} from '@mui/material';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import MyTextField from '@/components/forms/TextField';
import schemaLogIn from '@/schema/schemaLogIn';
import {PD} from '@/constants/pages-data';
import {loginTextFields} from '@/constants/text-fields';
import SubmitButton from '@/components/buttons/SubmitButton';
import {useRouter} from 'next/navigation';
import {signIn} from 'next-auth/react';
import {LoginValues} from '@/types/form-types';
import {useNotification} from '@/provider/notification-provider';

const LoginForm = () => {
  const {login} = PD.buttons;
  const methods = useForm<LoginValues>({resolver: yupResolver(schemaLogIn)});
  const router = useRouter();
  const {showError} = useNotification();

  const onSubmit: SubmitHandler<LoginValues> = async (data) => {
    const res = await signIn('login-cred', {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res?.error) {
      showError(res?.error);
      return;
    }

    if (res && !res.error) {
      router.push('/');
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          {loginTextFields.map((el) => (
            <Grid key={el.id} item xs={12}>
              <MyTextField {...el} />
            </Grid>
          ))}
          <Grid item xs={12}>
            <SubmitButton text={login} />
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
