import React from 'react'

const Filter1 = () => {
  const input = [3, 5, 7, 9];
  const output = input.filter(ele => ele > 5);
  return (
    <>
      <div>Filter1: {output.map(ele => ele+' ')}</div>
    </>
  )
}

export default Filter1;