import React from 'react'
import { useState } from 'react'
import SayHello from './SayHello';

const Sayhelloinput = () => {
  const [userName, setUserName] = useState('');
  const [issendData, setIsSendData] =useState(false);

  const check = (e) => {
    e.preventDefault();
    setIsSendData(true);
  }

  return (
    <>
      <form onSubmit={check}>
        <label>
          Enter your name:
          <input 
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
      
      {issendData && (
         <SayHello name={userName} />
      )}
    </>
  )
}

export default Sayhelloinput