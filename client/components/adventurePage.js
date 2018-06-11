import React, {Component} from 'react'
import {connect} from 'react-redux'
import getNewOptions from '../store'


export class AdventurePage extends Component{
  constructor(props){
    super(props)
  }

  render = () => {
    console.log('props are', this.props)
    return (

      <div>
        <h1>In Adventure Page</h1>
        {this.props.option.length === 0
        ? null
        : (
          <div>
            <h2>{this.props.situation.value.situation}</h2>
            <button>{this.props.option[0].option}</button>
            <button>{this.props.option[1].option}</button>
            <button>{this.props.option[2].option}</button>
            <button>{this.props.option[3].option}</button>
          </div>
        )}
      </div>
    )
  }

}

/**
 * CONTAINER
 */
const mapState = ({situation, option}) => ({
  situation,
  option
})

const mapDispatch = (dispatch) => () => ({
  nextSituationOptions(){
    dispatch(getNewOptions())
  }
})

export default connect(mapState, mapDispatch)(AdventurePage)
