import React from 'react'
import "../css/ConditionalRendering.css"

const SelectField = () => {
  return (
    <>
      <div className='SelectField'>
        <select name='SelectFieldSelect' className='SelectFieldSelect'>
            <option className='SelectFieldOption' value={1}>One</option>
            <option className='SelectFieldOption' value={2}>Two</option>
            <option className='SelectFieldOption' value={3}>Three</option>
        </select>
      </div>
    </>
  )
}

export default SelectField