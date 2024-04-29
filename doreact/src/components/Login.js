import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    if (!email.includes('@')) {
      setEmailError('Enter a valid email address');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      setPasswordError('Password 6 characters long');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const onButtonClick = () => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    if (isEmailValid && isPasswordValid) {
      navigate('/todo');
    }
  };

  return (
    <div className="mainContainer h-screen flex flex-col justify-center items-center bg-[#252422]">
      <div className="titleContainer  mx-auto p-5 shadow-md rounded-md max-w-md bg-[#fffcf2]">
        <h1 className="Rubrik text-3xl text-center pt-4 pb-4 pl-6 pr-6 text-[#252422] text-xlg">
          Login ToDo App
        </h1>
      </div>
      <br />
      <div className="inputContainer  mx-auto p-5 shadow-md rounded-md max-w-md bg-[#fffcf2]">
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className="inputBox border-gray-300 rounded-md p-2 mb-2 focus:outline-none"
        />
        <label className="errorLabel ml-1">{emailError}</label>
      </div>
      <br />
      <div className="inputContainer  mx-auto p-4 rounded-md max-w-md bg-[#fffcf2]">
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className="inputBox border-gray-300 rounded-md p-2 mb-2 focus:outline-none"
        />
        <label className="errorLabel ml-1">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          className="inputButton bg-[#eb5e28] rounded-md px-14 py-3 mt-2 mb-2 text-white cursor-pointer hover:bg-[#d6492f]"
          type="button"
          onClick={onButtonClick}
          value={'Log in'}
        />
      </div>
    </div>
  );
};

export default Login;
