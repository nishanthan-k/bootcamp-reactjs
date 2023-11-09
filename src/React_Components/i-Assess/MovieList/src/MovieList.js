import React from 'react'
import MovieNavHeader from './MovieNavHeader'
import MovieStreaming from './MovieStreaming'

const MovieList = () => {
  return (
    <>
      <div className='MovieList'>
        <MovieNavHeader />
        <MovieStreaming />
      </div>
    </>
  )
}

export default MovieList