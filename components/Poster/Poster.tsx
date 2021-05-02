import { IMoive } from '../Row/Row'
import YouTube from '../Youtube/Youtube'
import movieTrailer from 'movie-trailer'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { setSelectedMovieID, setTrailerURL } from '../../store/reducers/netflix-slice'
import Image from "next/image"

import { useEffect, useState } from 'react'

const opts = { autoplay: true }

interface PosterProps {
  movie: IMoive
  isLargeRow?: boolean
}

export const Poster = ({ movie, isLargeRow }: PosterProps): JSX.Element => {
  const trailerUrl = useSelector((s: RootStateOrAny) => s.netflix.trailerURL)
  const movieID = useSelector((s: RootStateOrAny) => s.netflix.movieID)
  const dispatch = useDispatch()
  const [showTrailer, setShowTrailer] = useState(false)

  useEffect(() => {
    let timeoutID: any = null
    if (showTrailer) {
      timeoutID = setTimeout(() => openTrailer(movie), 2000)
    }
    return () => {
      clearTimeout(timeoutID)
    }
  }, [showTrailer])

  const openTrailer = async (movie: Record<string, any>) => {
    try {
      const name = movie?.original_title || movie?.title || movie?.name || ''
      const url = await movieTrailer(name)
      const urlParams = new URLSearchParams(new URL(url).search)
      if (trailerUrl && trailerUrl === urlParams.get('v')) {
        dispatch(setTrailerURL(''))
      } else {
        dispatch(setTrailerURL(urlParams.get('v') || ''))
        dispatch(setSelectedMovieID(movie.id))
      }
    } catch (err) {
      if (trailerUrl && movieID) {
        setTrailerURL('')
        dispatch(setSelectedMovieID(null as any))
      }
    }
  }

  return (
    <div
      className={`relative w-52 h-full transition transform duration-500  hover:scale-105 mr-4 last:mr-0 ${
        isLargeRow && 'w-80 hover:scale-110'
      } `}
      onMouseEnter={() => setShowTrailer(true)}
      onMouseLeave={() => setShowTrailer(false)}
    >
      {trailerUrl && movieID === movie.id && showTrailer ? (
        <YouTube
          className="w-full h-full object-cover"
          videoId={trailerUrl}
          {...{
            ...opts,
            width: isLargeRow ? '1200px' : '3840px',
            height: isLargeRow ? '1800px' : '2160px',
          }}
        />
      ) : (
        <Image
          width={isLargeRow ? 1200 : 3480}
          height={isLargeRow ? 1800 : 2160}
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original${
            isLargeRow ? movie.poster_path : movie.backdrop_path
          }`}
          alt={movie.original_name}
        />
      )}
    </div>
  )
}

export default Poster
