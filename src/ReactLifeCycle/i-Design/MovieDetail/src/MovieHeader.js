import React from 'react'
import "../css/MovieHeader.css"

const MovieHeader = () => {
    return (
        <>
            <div className='MovieHeader'>
                <header className='MovieHeader-Header'>
                    <p className='MovieHeader-Logo'>Show Time</p>

                    <ul className='MovieHeader-List'>
                        <li>Term Insurance</li>
                        <li>Customer Service</li>
                        <li>About Us</li>
                    </ul>
                </header>
            </div>
        </>
    )
}

export default MovieHeader