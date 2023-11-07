import React from 'react'
import NavHeader from "./NavHeader"
import NowScreening from './NowScreening'
import ComingSoon from './ComingSoon'
import Exclusive from './Exclusive'

const HomeApp = () => {
  return (
    <>
      <NavHeader />
      <NowScreening />
      <ComingSoon />
      <Exclusive />
    </>
  )
}

export default HomeApp