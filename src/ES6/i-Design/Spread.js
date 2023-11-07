import React from 'react'

const Spread = () => {
  const input = [3, 5, 7, 9];
  const output = [...input]
  return (
    <div>Spread: {output.map(ele => ele+' ')}</div>
  )
}

export default Spread;