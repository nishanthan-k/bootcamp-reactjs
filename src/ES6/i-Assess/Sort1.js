import React from 'react'

const Sort1 = () => {
  const input = [10, 30, 20, 50, 40];
  const output = input.sort((a, b) => {return a-b});
  return (
    <>
     <div>Sort1: {output.map(ele => ele+' ')}</div>
    </>
  )
}

export default Sort1;