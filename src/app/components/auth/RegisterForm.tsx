'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputText from '../form/InputText';
import SubmitButton from '../form/SubmitButton';

type FormData = {
  username: string;
  password: string;
  name: string;
  photoUrl: string;
};

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
    name: yup.string().required(),
    photoUrl: yup.string().required(),
  })
  .required();

const RegisterForm = () => {
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
        <InputText type='text' label={'Name: '} fieldName={'name'} placeholder='Anakin Skywalker' />

        <InputText
          type='text'
          label={'Your photo´s url:'}
          fieldName={'photoUrl'}
          placeholder='https://...'
          styles='mt-4'
        />

        <InputText
          type='text'
          label={'Username'}
          fieldName={'username'}
          placeholder='Anakin'
          styles='mt-4'
        />

        <InputText type='password' label={'Password:'} fieldName={'password'} styles='mt-4' />

        <SubmitButton label={'Sign in'} onSubmit={onSubmit} styles='mt-4' />
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
