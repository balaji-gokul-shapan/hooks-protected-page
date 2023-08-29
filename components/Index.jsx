import React, { useState, useReducer, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { Profile } from './Profile';
import { Counter } from './Counter';
import { Promises } from './Promises';
export const AppContext = createContext(null);
export const counterContext = createContext();
const initialState = 100;
const reducer = (state, action) => {
  switch (action) {
    case 'increment2': {
      return state + 50;
    }
    case 'decrement2': {
      return state - 50;
    }
    case 'reset': {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export const Index = () => {
  const [counter, dispatch] = useReducer(reducer, initialState);
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  return (
    <>
      <AppContext.Provider value={{ data, setData, counter }}>
        <counterContext.Provider value={{ count: counter, dispatch: dispatch }}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/app" element={<Counter />} />
            <Route path="/promise" element={<Promises />} />
          </Routes>
        </counterContext.Provider>
      </AppContext.Provider>
    </>
  );
};
