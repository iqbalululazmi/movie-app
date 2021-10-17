import { combineReducers } from 'redux'

import movie from './movie/slices'

const rootReducers = combineReducers({
  movie,
})

export default rootReducers
