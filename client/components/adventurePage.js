import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import axios from 'axios'
import situationTreeCreator from '../helperFunctions/situationTreeCreator'


export class AdventurePage extends Component{
  constructor(props){
    super(props)
    this.getSituationData()
    this.getOptionData()
  }

  getSituationData = () => {

    axios.get('/api/situation')
    .then(response => {
      let situationTree = situationTreeCreator(response.data)
      this.setState({situationTree})
    })

  }

  getOptionData = () => {

    axios.get('/api/option')
    .then(response => {
      this.setState({options: response.data})
    })

  }

  render = () => {
    return (<h1>In Adventure Page</h1>)
  }

}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(AdventurePage)

/**
 * PROP TYPES
 */
// AdventurePage.propTypes = {
//   situation: PropTypes.string,
//   options: PropTypes.string
// }
