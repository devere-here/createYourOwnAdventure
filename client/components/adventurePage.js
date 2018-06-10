import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'


export const AdventurePage = props => {
  return (<h1>In Adventure Page</h1>)
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
AdventurePage.propTypes = {
  situation: PropTypes.string,
  options: PropTypes.string
}
