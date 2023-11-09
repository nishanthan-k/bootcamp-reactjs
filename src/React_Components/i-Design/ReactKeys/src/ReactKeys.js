import React from 'react'
import "../css/ReactKeys.css"

const ReactKeys = () => {

  const desserts = [
    {id:1,name:'Cone',src:require('../assets/img/cone.jpeg')},
    {id:2,name:'Brighams',src:require('../assets/img/brighams.png')},
    {id:3,name:'Milkshake',src:require('../assets/img/milkshake.jpg')},
    {id:4,name:'Squeeze',src:require('../assets/img/squeeze.jpeg')},
]

  return (
    <>
      <div className='ReactKeys'>
        <h1 className='ReactKeysTitle'>React Keys</h1>

        <div className='DessertsListReactKeys'>
          {desserts.map((e, i)=> (
            <div className='Desserts' key={e.id}>
              <p id={`label${i}`}>{e.name}</p>
              <img id={`img${i}`} className={e.id} src={e.src} alt={e.name} height={'150'}/>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

export default ReactKeys
