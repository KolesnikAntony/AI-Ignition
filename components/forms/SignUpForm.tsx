'use client';
import React from 'react';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import {Grid} from '@mui/material';
import MyTextField from '@/components/forms/TextField';
import ToggleField from '@/components/forms/ToggleField';
import {yupResolver} from '@hookform/resolvers/yup';
import singUpSchema from '@/schema/schemaSignUp';
import {PD} from '@/constants/pages-data';
import {signUpTextFields} from '@/constants/text-fields';
import Terms from '@/components/common/Terms';
import SubmitButton from '@/components/buttons/SubmitButton';
import {signIn} from 'next-auth/react';
import {useRouter} from 'next/navigation';
import {SingUpValues} from '@/types/form-types';
import {useNotification} from '@/provider/notification-provider';

const SignUpForm = () => {
  const {signup} = PD.buttons;
  const router = useRouter();
  const methods = useForm<SingUpValues>({resolver: yupResolver(singUpSchema)});
  const {showError} = useNotification();
  const onSubmit: SubmitHandler<SingUpValues> = async (data) => {
    const res = await signIn('credentials', {
      ...data,
      redirect: false,
      type: 'signup',
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
        <Grid container columnSpacing={4} rowSpacing={4}>
          {signUpTextFields.map((el, index) => (
            <Grid key={el.id} item xs={index > 1 ? 12 : 6}>
              <MyTextField {...el} />
            </Grid>
          ))}
          <Grid item xs={12}>
            <ToggleField />
          </Grid>
          <Grid item xs>
            <Terms />
          </Grid>
          <Grid item xs={12}>
            <SubmitButton text={signup} />
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
};

export default SignUpForm;
