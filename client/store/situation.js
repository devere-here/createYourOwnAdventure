import axios from 'axios'
import situationTreeCreator from '../helperFunctions/situationTreeCreator'

/**
 * ACTION TYPES
 */
const SET_SITUATION = 'SET_SITUATION'

/**
 * INITIAL STATE
 */
const defaultSituation = {}

/**
 * ACTION CREATORS
 */
export const setSituation = situation => ({type: SET_SITUATION, situation})

/**
 * THUNK CREATORS
 */

export const setIntroSituation = () => dispatch => {
  axios.get('/api/situation')
  .then(response => situationTreeCreator(response.data))
  .then(situationTree => dispatch(setSituation(situationTree)))
}

/**
 * REDUCER
 */
export default function(state = defaultSituation, action) {
  console.log('in the reducer action.situation is', action.situation)
  switch (action.type) {
    case SET_SITUATION:
      return action.situation
    default:
      return state
  }
}
