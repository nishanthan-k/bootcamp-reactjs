import React, { Component } from 'react'
import Timer from './Timer'
import "../css/Timer.css"

class ComponentDidMount extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <>
       <div className='ComponentDidMount'>
           <Timer />
       </div>
      </>
    )
  }
}

export default ComponentDidMount