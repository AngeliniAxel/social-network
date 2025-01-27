'use client';

import { yupResolver } from '@hookform/resolvers/yup';
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
  const methods = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: FormData) => {
    console.log(JSON.stringify(data));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputText type='text' label={'Username'} fieldName={'username'} placeholder='Anakin' />
        <InputText type='password' label={'Password'} fieldName={'password'} styles='mt-4' />
        <SubmitButton label={'Login'} onSubmit={onSubmit} styles='mt-4' />
      </form>
    </FormProvider>
  );
};

export default LoginForm;
