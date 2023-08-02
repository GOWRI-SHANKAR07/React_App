// ComponentA.js
import React, { useContext } from 'react';
import MyContext from '../../Hooks/useContext';

function ComponentA() {
  // Consume the context value using useContext
  const contextData = useContext(MyContext);
  console.log(contextData.message);

  return (
    <div>
      <h1>{contextData.message}</h1>
    </div>
  );
}

export default ComponentA;
