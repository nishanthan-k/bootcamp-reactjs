import React from 'react'

const Filter = () => {
  const input = [33, 50, 70, 91];
  const output = input.filter(ele => ele%10 === 0);
  return (
    <>
      <div>Filter: {output.map(ele => ele+'\n')}</div>
    </>
  )
}

export default Filter;