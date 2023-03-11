import s from './button.module.css';

const Button = ({ children, type = 'submit' }) => {
  return (
    <button type={type} className={s.btn}>
      {children}
    </button>
  );
};

export default Button;
