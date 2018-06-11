import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { setIntroOptions, setIntroSituation } from '../store'


/**
 * COMPONENT
 */
class UserHome extends Component {

  handleClick = () => {
    this.props.setUpSituationTree()
    this.props.setUpOptions()
    this.props.history.push(`/secretAdventure`)
  }

  render = () => (
    <div>
      <h3>BRBRBRBRBRRBRBRBRBRBRBRBRBBBBBBBBB</h3>
      <h4>Press the button below to begin your adventure</h4>
      <button type='submit' onClick={() => this.handleClick()}>Begin Adventure</button>
    </div>
  )
}

/**
 * CONTAINER
**/

const mapDispatch = (dispatch) => ({
  setUpSituationTree() {
    dispatch(setIntroSituation(true))
  },
  setUpOptions() {
    dispatch(setIntroOptions(true))
  }

})


export default connect(null, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */

