import PropTypes from 'prop-types';

import TextField from './textFields';

import useForm from 'shared/hooks/useForm';

import { fields } from './fields';
import initialState from './initialState';
import Button from 'shared/components/Button';

import s from './login-form.module.css';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password } = state;

  return (
    <form className={s.wrapper} onSubmit={handleSubmit}>
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button>Login</Button>
    </form>
  );
};
export default LoginForm;

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
