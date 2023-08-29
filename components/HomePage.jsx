import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IndexContainer, IndexButton, IndexSection } from '../styles';
// import { Profile } from './Profile';
import { LinkSection } from '../styles/homepage';

export const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const values = location.state;

  useEffect(() => {
    console.log(values);
  }, [values]);

  const routeChange = () => {
    // console.log('route change');
    navigate(-1);
  };
  return (
    <>
      <IndexContainer>
        <h1>Hi..!{values.data.username}</h1>
        <LinkSection to="/app">Counter</LinkSection>
        <IndexSection>
          <LinkSection to="/profile">Profile</LinkSection>
        </IndexSection>
        <IndexButton onClick={routeChange}>Back</IndexButton>
      </IndexContainer>
    </>
  );
};
