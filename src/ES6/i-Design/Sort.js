import React from 'react'

const Sort = () => {
  const input = [10, 20, 30, 40, 50];
  const output = input.sort((a, b) => {return a-b});
  return (
    <>
      <div>Sort: {output.map(ele => ele + ' ')}</div>
    </>
  )
}

export default Sort;