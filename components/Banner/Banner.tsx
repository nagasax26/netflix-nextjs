import { useEffect, useState } from 'react'

// import './banner.scss'

interface IMovie {
  backdrop_path: string
  title: string
  name: string
  original_name: string
  overview: string
}

const truncate = (str: string, n: number) => {
  return str?.length > n ? str.substr(0, n - 1) + '...' : str
}

function Banner({ movie }) {

  return (
    <header
      className="text-white object-contain mb-8 relative h-96"
    >
      <img
        className="absolute w-full h-full object-cover"
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt="movie banner"
      />
      <div className="h-48 absolute left-10 top-1/2 transform -translate-y-1/2">
        <h1 className="text-4xl font-extrabold mb-4">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="mb-4">
          <button className="cursor-pointer text-white outline-none border-none font-bold rounded-sm px-3 py-1 bg-[#33333333] hover:[#141414] hover:bg-[#e6e6e6] transition-all duration-200 mr-4">Play</button>
          <button className="cursor-pointer text-white outline-none border-none font-bold rounded-sm px-3 py-1 bg-[#33333333] hover:[#141414] hover:bg-[#e6e6e6] transition-all duration-200">My List</button>
        </div>
        <h1 className="w-80 h-16 leading-6 pt-1 text-xl w-max-50">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="h-1/2 fade-gradient absolute top-1/2 w-full transform -translate-y-1/6 translate-y-1"></div>
    </header>
  )
}

export default Banner

