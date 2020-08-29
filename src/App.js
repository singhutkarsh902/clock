import React, { useState } from 'react';

const App =() => {

  let currTime = new Date();

  const [ time, setTime ] = useState( currTime );
  
  const updateTime = () => {
    setTime( new Date() );
  }

  setInterval(() => {
    updateTime();
  }, 1);

  return(
    <>
      <h1>{ time.toLocaleTimeString() }</h1>
    </>
  );
};

export default App;
