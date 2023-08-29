import React, { useContext, useMemo,  } from 'react';
import { IndexButton, IndexContainer,IndexSection } from '../styles';
import { AppContext } from './Index';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
    const navigate = useNavigate()
    const {data} = useContext(AppContext);
    const routeChange = () => {
        // console.log('route change');
        navigate('/');
      };
      const fullName = useMemo(()=>{
        console.log('executing Full name..');
        return data.username +''+ data.password
      },[data.username, data.password])
  return (
    <>
      <IndexContainer sx={{ height: '300px' }}>
        <h1>Profile</h1>
        <IndexSection sx={{display:'flex', flexDirection:'column'}}>
            <h3>Name:  {data.username}</h3>
            <h3>Password:  {data.password}</h3>
            <h3>FullName: {fullName}</h3>
        </IndexSection>
        <IndexButton onClick={routeChange}>Home</IndexButton>
      </IndexContainer>
    </>
  );
};
