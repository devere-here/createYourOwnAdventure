import React, { Component } from 'react'
import {connect} from 'react-redux'
import { setIntroOptions, setIntroSituation } from '../store'

/**
 * COMPONENT
 */
class GuestHome extends Component{
  constructor(props){
    super(props)
  }

  handleClick = () => {
    this.props.setUpSituationTree()
    this.props.setUpOptions()
    this.props.history.push(`/adventure`)
  }

  render = () => {
    return (
      <div>
        <h3>Welcome Guest</h3>
        <h4>Press the button below to begin your adventure</h4>
        <button type='submit' onClick={() => this.handleClick()}>Begin Adventure</button>
      </div>
    )
  }
}

/**
 * CONTAINER
 */

const mapDispatch = (dispatch) => ({
  setUpSituationTree() {
    dispatch(setIntroSituation(false))
  },
  setUpOptions() {
    dispatch(setIntroOptions(false))
  }

})


export default connect(null, mapDispatch)(GuestHome)
