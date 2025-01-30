'use client';

import authApi from '@/services/auth/auth.service';
import { AccessDeniedError } from '@/services/common/http.errors';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputText from '../form/InputText';
import SubmitButton from '../form/SubmitButton';

type FormData = {
  username: string;
  password: string;
};

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const LoginForm = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const methods = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: FormData) => {
    setServerError(null);
    try {
      const loginResponse = await authApi.login(data.username, data.password);
      console.log(JSON.stringify(loginResponse));
      router.push('/');
    } catch (e) {
      if (e instanceof AccessDeniedError) {
        setServerError('The Username or Password is Incorrect');
      } else {
        setServerError('Something went wrong, please try again');
      }
    }

    return false;
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputText type='text' label={'Username:'} fieldName={'username'} placeholder='Anakin' />
        <InputText type='password' label={'Password:'} fieldName={'password'} styles='mt-4' />
        <SubmitButton label={'Login'} onSubmit={onSubmit} styles='mt-4' />
        {serverError && <div className='mt-2 text-red-600'>{serverError}</div>}
      </form>
    </FormProvider>
  );
};

export default LoginForm;
