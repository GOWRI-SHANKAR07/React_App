// App.js
import React from 'react';
import MyContext from '../Hooks/useContext';
import ComponentA from './components/UseContext';
import UseCallback from '../Hooks/useCallback'; 
import UseMemo from '../Hooks/useMemo';
import UseRef from '../Hooks/useRef';
import UseReducer from '../Hooks/useReducer';
import Custom_Hook from '../screens/Custom_Hook';

function App() {
  // Define the data you want to share in the context
  const sharedData = {
    message: 'Hello from the Context!',
  };

  return (
    <MyContext.Provider value={sharedData}>
      <ComponentA />
    </MyContext.Provider>
  );
}

export default App;
