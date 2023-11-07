import React from 'react'

const Map1 = () => {
  const input = [33, 50, 70, 91];
  return (
    <>
      <div>Map1: {input.map(ele => ele+1+' ')}</div>
    </>
  )
}

export default Map1;