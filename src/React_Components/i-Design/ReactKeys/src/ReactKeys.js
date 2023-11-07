import React from 'react'
import "../css/ReactKeys.css"

const ReactKeys = () => {

  const desserts = [
    {id:1,name:'Cone',src:require('../assets/icecream.jpeg')},
    {id:2,name:'Brighams',src:require('../assets/brighams.jpeg')},
    {id:3,name:'Milkshake',src:require('../assets/milkshake.jpeg')},
    {id:4,name:'Squeeze',src:require('../assets/squeeze.jpeg')},
]

  return (
    <>
      <div>
        <h1>React Keys</h1>

        <div className='desserts-list-react-keys'>
          {desserts.map((e, i)=> (
            <div className='desserts' key={e.id}>
              <p id={`label${i}`}>{e.name}</p>
              <img id={`img${i}`} className={e.id} src={e.src} alt={e.name} />
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

export default ReactKeys