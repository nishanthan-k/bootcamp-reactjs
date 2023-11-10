import React from 'react'
import "../css/ConditionalRendering.css"

const InputField = () => {
  return (
    <>
      <div className='InputField'>
      <input type='text' placeholder='Type your text' className='InputFieldText' />
      </div>
    </>
  )
}

export default InputField