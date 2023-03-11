import { useDispatch } from 'react-redux';

import { signup } from 'redux/auth/auth-operations';

import RegisterForm from 'modules/Phonebook/RegisterForm/RegisterForm';

import s from './register.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSignup = data => {
    console.log(data);
    dispatch(signup(data));
  };

  return (
    <div>
      <h1 className={s.title}>Register page</h1>
      <RegisterForm onSubmit={handleSignup} />
    </div>
  );
};

export default RegisterPage;
