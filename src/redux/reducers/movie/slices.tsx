import { IActionsProps, IStateProps } from './reducer.type'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
  movies: [], // data
  releaseDate: {
    year: 0,
    gte: '',
    lte: '',
  },
  page: 1,
  keyword: '',
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
    filterByYear(state: IStateProps, actions: IActionsProps) {
      Object.assign(state, {
        ...state,
        releaseDate: actions.payload,
      })
    },
    search(state: IStateProps, actions: IActionsProps) {
      const { query } = actions.payload
      Object.assign(state, {
        ...state,
        query,
      })
    },
  },
})

export const { fetchMovie, paging, filterByYear, search } = slices.actions
export default slices.reducer
