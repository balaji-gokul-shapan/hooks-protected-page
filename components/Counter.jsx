import React, { useReducer, useContext, } from 'react';
import {
  IndexButton,
  IndexContainer,
  IndexSection,
  IndexSubSection,
} from '../styles';
import { AppContext, counterContext } from './Index';
import { LinkSection } from '../styles/homepage';

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      //   return state + 1;
      return { ...state, firstCounter: state.firstCounter + action.value };
    case 'decrement':
      //   return state - 1;
      return { ...state, firstCounter: state.firstCounter - action.value };

    case 'increment1':
      return { ...state, secondCounter: state.secondCounter + action.value };
    case 'decrement1':
      return { ...state, secondCounter: state.secondCounter - action.value };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

export const Counter = () => {
  const { counter } = useContext(AppContext);
  const counterContexts = useContext(counterContext);
  const [count, dispatch] = useReducer(reducer, initialState);

  const handleInc = (num) => {
    dispatch({ type: 'increment', value: num });
  };
  const handleDec = (num) => {
    dispatch({ type: 'decrement', value: num });
  };
  const MultipliedValue = count.firstCounter * 10
  return (
    <>
      <IndexContainer>
        <IndexSubSection>
          <h2>Count - {count.firstCounter}</h2>
          <h2>Count - {count.secondCounter}</h2>
          <h2>Count - {counter}</h2>
        </IndexSubSection>
        <h4>The Multiply Value:{MultipliedValue}</h4>
        <IndexSection style={{ width: '100%' }}>
          <IndexButton
            style={{ width: '400px' }}
            // onClick={() => dispatch({ type: 'increment', value: 1 })}
            //    onClick={handleInc('1')}
            onClick={() => handleInc(1)}>
            Increment
          </IndexButton>
          <IndexButton
            sx={{ width: '400px' }}
            // onClick={() => dispatch({ type: 'decrement', value: 1 })}
            onClick={() => handleDec(1)}>
            Decrement
          </IndexButton>
          <IndexButton
            sx={{ width: '100%' }}
            // onClick={() => dispatch({ type: 'increment', value: 5 })}
            onClick={() => handleInc(5)}>
            Increment by 5
          </IndexButton>
          <IndexButton
            sx={{ width: '100%' }}
            // onClick={() => dispatch({ type: 'decrement', value: 5 })}
            onClick={() => handleDec(5)}>
            Decrement by 5
          </IndexButton>
        </IndexSection>
        <IndexSection style={{ width: '100%' }}>
          <IndexButton
            style={{ width: '400px' }}
            onClick={() => dispatch({ type: 'increment1', value: 10 })}>
            Increment by 10
          </IndexButton>
          <IndexButton
            sx={{ width: '400px' }}
            onClick={() => dispatch({ type: 'decrement1', value: 10 })}>
            Decrement by 10
          </IndexButton>
        </IndexSection>
        {/* checking */}
        <h6>useReducer with useContext</h6>
        <IndexSection style={{ width: '100%' }}>
          <IndexButton
            style={{ width: '400px' }}
            onClick={() => counterContexts.dispatch('increment2')}>
            Increment by 50
          </IndexButton>
          <IndexButton
            sx={{ width: '400px' }}
            onClick={() => counterContexts.dispatch('decrement2')}>
            Decrement by 50
          </IndexButton>
        </IndexSection>
        <IndexButton onClick={() => dispatch({ type: 'reset' })}>
          Reset
        </IndexButton>
        <LinkSection to='/promise' >Promises</LinkSection>
      </IndexContainer>
    </>
  );
};
