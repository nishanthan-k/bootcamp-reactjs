import React from 'react'
import '../css/NowScreening.css'

const NowScreening = () => {
  return (
    <>
      <div className='NowScreening' id='now-screening'>
          <p className='NowScreeningSectionTitle' id='section-title'>Now Screening</p>

          <ul className='NowScreeningList' id='now-screening-list'>
            <li className='NowScreeningLsitItem'>Bombshell</li>
            <li className='NowScreeningLsitItem'>Darbar</li>
            <li className='NowScreeningLsitItem'>Hero</li>
            <li className='NowScreeningLsitItem'>Chhapaak</li>
          </ul>
      </div>
    </>
  )
}

export default NowScreening