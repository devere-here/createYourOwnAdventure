import React, {Component} from 'react'
import {connect} from 'react-redux'
import { getNewOptions, setSituation } from '../store'


export class AdventurePage extends Component{
  constructor(props){
    super(props)
  }

  handleClick = (num) => {
    this.props.getNextSiutation(this.props.situation.children[num])
    this.props.getNextSituationOptions(this.props.option)
  }

  render = () => {

    return (

      <div>
        <h1>In Adventure Page</h1>
        {console.log('props are', this.props)}
        {(this.props.option.length === 0) //|| Object.keys(this.props.situation).length === 0) //&& this.props.situation.children.length > 0
        ? null
        : (
          <div>
            <h2>{this.props.situation.value.situation}</h2>
            {this.props.situation.children.length === 0
            ? null
            : (
              <div>
                <h2>What do you do?</h2>
                <button onClick={() => this.handleClick(0)}>{this.props.option[0].option}</button>
                <button onClick={() => this.handleClick(1)}>{this.props.option[1].option}</button>
                <button onClick={() => this.handleClick(2)}>{this.props.option[2].option}</button>
                <button onClick={() => this.handleClick(3)}>{this.props.option[3].option}</button>
              </div>
            )}
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
  getNextSituationOptions(options){
    dispatch(getNewOptions(options))
  },
  getNextSiutation(situation){
    dispatch(setSituation(situation))
  }

})

export default connect(mapState, mapDispatch)(AdventurePage)
