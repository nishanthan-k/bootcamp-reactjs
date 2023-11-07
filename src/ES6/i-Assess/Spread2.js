import React from 'react'

const Spread2 = () => {
  const arr1  = [3, 5, 7, 9];
  const arr2 = [11, 13, 15];
  const output = [...arr1, ...arr2];
  return (
    <>
      <div>Spread2: {output.map(ele => ele + ' ')}</div>
    </>
  )
}

export default Spread2;