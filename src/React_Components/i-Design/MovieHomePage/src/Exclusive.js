import React from 'react'
import '../css/Exclusive.css'

const Exclusive = () => {
  return (
    <>
      <div className='Exclusive' id="exclusive">
        <p className='ExclusiveSectionTitle' id="section-title">Exclusive</p>

        <ul className='ExclusiveList' id="exclusive-list">
          <li className='ExclusiveListItem'>Bunker</li>
          <li className='ExclusiveListItem'>CountDown</li>
        </ul>
      </div>
    </>
  );
}

export default Exclusive