import axios from 'axios'
import randomizeOptions from '../helperFunctions/randomizeOptions'
import { secretOptionRoute } from '../../secrets.js'


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

export const setIntroOptions = secret => dispatch => {
  let path = secret ? secretOptionRoute : '/api/option'
  axios.get(path)
  .then(response => randomizeOptions(response.data))
  .then(randomizedOptions => dispatch(setOptions(randomizedOptions)))
}

export const getNewOptions = (options, num) => dispatch => {
  let newOptions = options.slice(num)
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
