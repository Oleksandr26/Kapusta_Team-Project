import s from './UserForm.module.css';

import { useDispatch } from 'react-redux';
import { login, register } from 'redux/auth/auth-operations';
import { useState } from 'react';

const UserForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  return (
    <div className={` ${s.backgraund}`}>
      <p className={s.text}>You can log in with your Google Account:</p>
      <p className={s.text}>
        Or log in using an email and password, after registering:
      </p>
      <form className={s.form}>
        <label className={s.label}>
          <span className={s.label_text}>Email:</span>
          <input
            className={s.input}
            placeholder='your@email.com'
            type="email"
            value={email}
            onChange={handleChange}
            name="email"
            required
          />
        </label>
        <label className={s.label}>
          <span className={s.label_text}>Password:</span>
          <input
            className={s.input}
            placeholder='Password'
            type="password"
            value={password}
            onChange={handleChange}
            name="password"
            required
          />
        </label>
        <div className={s.wrapper_button}>
        <button
          className={s.button}
          type="submit"
          name="login"
          onClick={e => {
            e.preventDefault();
            dispatch(login({ email, password }));
            setEmail('');
          }}
        >
          Login
        </button>
        <button
          className={s.button}
          type="submit"
          name="register"
          onClick={e => {
            e.preventDefault();
            dispatch(register({ email, password }));
            setPassword('');
          }}
        >
          Register
        </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
