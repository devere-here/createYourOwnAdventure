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
      { situation, option, history } = this.props,
      bool = situation.children && situation.children.length === 0

    return (
      <div id='container'>
        {(option.length === 0 || situation.value === undefined)
        ? null
        : (
          <div id='textBox'>
            <h1 id='situation'>{`${situation.value.situation} ${bool ? '' : 'What do you do?'}`}</h1>
            {bool
            ? <button
                type='submit'
                className='apSpookyButton returnHomeButton'
                onClick={() => history.push('/')}
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
                        {option[idx].option}
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
