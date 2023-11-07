import React from 'react'

const Find = () => {
  const input = [6, 3, 7, 8, 9];
  return (
    <>
      <div>Find: {input.find(ele => ele > 5 && ele %2 === 1)}</div>
    </>
  )
}

export default Find;