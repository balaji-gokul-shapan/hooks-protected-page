import React, { useRef, useContext, useCallback } from 'react';
import {
  IndexButton,
  IndexContainer,
  TextFieldStyled,
  IndexSection,
} from '../styles';
import { useNavigate } from 'react-router-dom';

import { AppContext } from './Index';
export const LoginPage = () => {
  const { data, setData } = useContext(AppContext);
  const navigate = useNavigate();

  const inputRef = useRef(null);
  const inputRefPass = useRef(null);
  // const handleClick = () => {
  //   inputRef.current.focus();
  // };
  const handleClick = useCallback(() => {
    inputRef.current.focus();
  }, []);
  const handleClickPass = useCallback(() => {
    inputRefPass.current.focus();
  }, []);
  const routeChange = () => {
    if (
      data.password.trim().length !== 0 &&
      data.username.trim().length !== 0
    ) {
      navigate('/home', {
        state: {
          data,
        },
      });
    } else {
      alert('please fill the items.!');
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  // console.log(data.username, data.password);
  return (
    <>
      <IndexContainer>
        <h1>Login</h1>
        <IndexSection>
          <TextFieldStyled
            label="Username"
            inputRef={inputRef}
            autoComplete="true"
            // disabled={isInputEnabled}
            name="username"
            value={data.name}
            onChange={handleChange}
          />
          {/* <TextFieldStyled type="text" inputRef={inputRef} /> */}
          <IndexButton onClick={handleClick}>Edit</IndexButton>
        </IndexSection>
        <IndexSection>
          <TextFieldStyled
            label="Password"
            inputRef={inputRefPass}
            name="password"
            value={data.password}
            onChange={handleChange}
          />
          <IndexButton onClick={handleClickPass}>Edit</IndexButton>
        </IndexSection>
        <IndexButton onClick={routeChange}> Submit</IndexButton>
      </IndexContainer>
    </>
  );
};
