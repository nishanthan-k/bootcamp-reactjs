import React from 'react'
import "../css/TicketFormDisplay.css"

const TicketFormDisplay = ( onInputChange, userName ) => {
  // console.log(onInputChange);
  console.log(userName);
  return (
    <>
     <div className='TicketFormDisplay'>

      <div className='TicketFormDisplayContent'>
        <h1 className='TicketFormDisplayH1'>Booked Successfully!</h1>
        <h2>Happy journey</h2>
      </div>



      <button onClick={e => {e.preventDefault(); onInputChange('showform', false)}}>Click</button>
     </div>
    </>
  )
}

export default TicketFormDisplay;