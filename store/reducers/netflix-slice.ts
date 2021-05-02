import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  trailerURL: '',
  movieID: null as unknown,
}

const NetflixSlice = createSlice({
  name: 'netflix',
  initialState: INITIAL_STATE,
  reducers: {
    setTrailerURL: (state, action: PayloadAction<string>) => {
      state.trailerURL = action.payload
    },
    setSelectedMovieID(state, action: PayloadAction<number>) {
      state.movieID = action.payload
    },
  },
})

export const { setTrailerURL, setSelectedMovieID } = NetflixSlice.actions

export default NetflixSlice.reducer
