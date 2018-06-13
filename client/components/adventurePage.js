import React, {Component} from 'react'
import {connect} from 'react-redux'
import { getNewOptions, setSituation } from '../store'
import randomizeOptions from '../helperFunctions/randomizeOptions.js'
import '../style/adventurePage.css'


export class AdventurePage extends Component{

  handleClick = (num) => {
    this.props.getNextSiutation(this.props.situation.children[num])
    this.props.getNextSituationOptions(this.props.option)
  }

  render = () => {
    let indices = randomizeOptions([0, 1, 2, 3]),
      bool = this.props.situation.children && this.props.situation.children.length === 0

    return (
      <div id='container'>
        {(this.props.option.length === 0)
        ? null
        : (
          <div id='textBox'>
            <h1 id='situation'>{`${this.props.situation.value.situation} ${bool ? '' : 'What do you do?'}`}</h1>
            {bool
            ? <button
                type='submit'
                className='apSpookyButton returnHomeButton'
                onClick={() => this.props.history.push('/')}
              >
                Return To Home Page
              </button>
            : (
                <div id='apButtonContainer'>
                  {
                    indices.map((elem, idx) => (
                      <button
                        key={elem}
                        type='submit'
                        className='apSpookyButton'
                        onClick={() => this.handleClick(indices[elem])}
                      >
                        {this.props.option[idx].option}
                      </button>
                    ))
                  }
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
    dispatch(getNewOptions(options, 4))
  },
  getNextSiutation(situation){
    dispatch(setSituation(situation))
  }

})

export default connect(mapState, mapDispatch)(AdventurePage)
