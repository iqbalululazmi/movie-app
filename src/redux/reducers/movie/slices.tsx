import { IActionsProps, IStateProps } from './reducer.type'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
  movies: [], // data
  releaseDate: '',
  page: 1,
}

const slices = createSlice({
  initialState,
  name: 'Movie',
  reducers: {
    fetchMovie(state: IStateProps, actions: IActionsProps) {
      const { movies } = actions.payload
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
  },
})

export const { fetchMovie, paging } = slices.actions
export default slices.reducer
