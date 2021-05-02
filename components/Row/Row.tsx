import { useEffect, useState } from 'react'
import Poster from '../Poster/Poster'
// import './row.scss'
import api from '../../services/api'


interface RowProps {
  title: string
  fetchUrl: string
  isLargeRow?: boolean
  results: Array<IMoive>
}

export interface IMoive {
  id: number
  original_name: string
  poster_path: string
  backdrop_path: string
}

function Row({ title, results, isLargeRow }: RowProps) {

  return (
    <div className="ml-6 text-white">
      <h2 className="text-2xl">{title}</h2>
      <div className="flex scrollbar-hide">
        <div className="p-6 flex items-center justify-center flex-nowrap">
          {results.filter((m: IMoive) => (isLargeRow ? m.poster_path : m.backdrop_path)).map((movie: IMoive) => (
            <Poster key={movie.id} movie={movie} isLargeRow={isLargeRow} />
          ))}
        </div>
      </div>
    </div>
  )
}

Row.deafultProps = {
  isLargeRow: false,
  results: []
}

export default Row
