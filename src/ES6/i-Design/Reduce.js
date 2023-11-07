import React from 'react'

const Reduce = () => {
  const input = [1, 2, 3, 4, 5];
  const output = input.reduce((mul, val) => {return mul*val}, 1);
  return (
    <>
      <div>Reduce: {output}</div>
    </>
  )
}

export default Reduce;