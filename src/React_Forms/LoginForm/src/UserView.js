import React from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const UserView = (props) => {
  const location = useLocation();
  const username = location.state.username;

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
      <h1 style={{fontSize: "24px"}}>Welocome {username}! </h1>
    </div>
  )
}

export default UserView