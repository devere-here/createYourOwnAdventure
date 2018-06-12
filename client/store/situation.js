import axios from 'axios'
import situationTreeCreator from '../helperFunctions/situationTreeCreator'
import { secretSituationRoute } from '../../secrets.js'

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

export const setIntroSituation = secret => dispatch => {
  let path = secret ? secretSituationRoute : '/api/situation'
  axios.get(path)
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
