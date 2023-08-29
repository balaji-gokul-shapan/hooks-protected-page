import React, { useState, useEffect } from 'react';
import { IndexContainer, IndexSection } from '../styles';

export const Promises = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetchData()
      .then((state) => setState(state))
      .catch((error) => console.error(error));
  }, []);
  function fetchData() {
    return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((state) => resolve(state))
        .catch((error) => reject(error));
    });
  }
  console.log(state);
  if (!state) {
    return <>Loading...!</>;
  }

  return (
    <>
      {/* {state[1]} */}
      <IndexContainer>
        <h3>User Details</h3>
        {state.length === 0 ? (
          <>
            <p>No data Existing</p>
          </>
        ) : (
          <>
            {state.map((user) => {
              return (
                <>
                  <IndexSection>
                    <p key={user.id}>{user.name}</p>
                  </IndexSection>
                  <p>{user.username}</p>
                  <p>{user.email}</p>
                </>
              );
            })}
          </>
        )}
      </IndexContainer>
    </>
  );
};
