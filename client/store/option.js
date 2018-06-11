import axios from 'axios'
import randomizeOptions from '../helperFunctions/randomizeOptions'

/**
 * ACTION TYPES
 */
const SET_OPTIONS = 'SET_OPTIONS'

/**
 * INITIAL STATE
 */
const defaultOptions = []

/**
 * ACTION CREATORS
 */
export const setOptions = options => ({type: SET_OPTIONS, options})

/**
 * THUNK CREATORS
 */

export const setIntroOptions = () => dispatch => {
  axios.get('/api/option')
  .then(response => randomizeOptions(response.data))
  .then(randomizedOptions => dispatch(setOptions(randomizedOptions)))
}

export const getNewOptions = options => dispatch => {
  let newOptions = options.slice(4)
  dispatch(setOptions(newOptions))
}

/**
 * REDUCER
 */
export default function(state = defaultOptions, action) {
  switch (action.type) {
    case SET_OPTIONS:
      return action.options
    default:
      return state
  }
}
