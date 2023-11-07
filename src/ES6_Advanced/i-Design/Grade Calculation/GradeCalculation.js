import React from 'react'
import { useState } from 'react'
// import CalculateGrade from './CalculateGrade';

const GradeCalculation = () => {
  const [input, setInput] = useState('');
  const [issendData, setIsSendData] =useState(false);
  
  const callCalculate = (e) => {
    e.preventDefault();
    setIsSendData(true);
  }

  return (
    <>
      <form onSubmit={callCalculate}>
        <label>
          Enter the marks:
          <input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>

      {issendData && (
         <callCalculate input={input} />
      )}
    </>
  )
}

export default GradeCalculation