import RegisterForm from '../components/auth/RegisterForm';

const RegisterPage = () => {
  return (
    <div className='flex items-center w-full flex-col'>
      <h2 className='mb-4'>Sign in to social network</h2>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
