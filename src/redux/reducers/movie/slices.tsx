import { IActionsProps, IStateProps } from './reducer.type'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
  movies: [], // data
  releaseDate: {
    year: 2021,
    gte: '',
    lte: '',
  },
  page: 1,
}

const slices = createSlice({
  initialState,
  name: 'Movie',
  reducers: {
    fetchMovie(state: IStateProps, actions: IActionsProps) {
      const { movies } = actions.payload
      console.log('slie', movies)
      Object.assign(state, {
        ...state,
        movies,
      })
    },
    paging(state: IStateProps, action: IActionsProps) {
      const { page } = action.payload
      Object.assign(state, {
        ...state,
        page,
      })
    },
    filterByYear(state: IStateProps, action: IActionsProps) {
      Object.assign(state, {
        ...state,
        releaseDate: action.payload,
      })
    },
  },
})

export const { fetchMovie, paging, filterByYear } = slices.actions
export default slices.reducer
