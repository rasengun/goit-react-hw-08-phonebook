import s from './textFields.module.css';
import { useMemo } from 'react';
import { nanoid } from 'nanoid';

const TextField = ({ label, handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <div>
      <label htmlFor={id} className={s.label}>
        {label}
      </label>
      <input className={s.input} id={id} onChange={handleChange} {...props} />
    </div>
  );
};

export default TextField;
