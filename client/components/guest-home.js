import React, { Component } from 'react'
import {connect} from 'react-redux'
import { setIntroOptions, setIntroSituation } from '../store'

import '../style/guestHome.css'

/**
 * COMPONENT
 */
class GuestHome extends Component{
  constructor(props){
    super(props)
    console.log('in guest home')
  }

  handleClick = () => {
    this.props.setUpSituationTree()
    this.props.setUpOptions()
    this.props.history.push(`/adventure`)
  }

  render = () => {
    return (
      <div id='ghContainer'>
        <div id='ghTextBox'>
          <h1 className='ghH1'>Choose Your Own Adventure</h1>
          <h2 className='ghH2'>Press a button below to begin your adventure</h2>
          <div id='ghButtonContainer'>
            <button type='submit' className='spooky' onClick={() => this.handleClick()}>Spooky Adventure</button>
            <button type='submit' className='comingSoon'>More adventures coming soon.</button>
          </div>
          <p>Email me at stevendeverehere@gmail.com if you have any suggestions for a new adventure story</p>
        </div>
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
