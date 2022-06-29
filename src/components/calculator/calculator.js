/* eslint-disable */
import React from 'react';

import './calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="calc-container">
        <div className="calc-buttons">
          <button
            data-testid="ac"
            type="button"
            className="button calc-ac"
            onClick={this.props.updateResult}
          >
            <div className="cell">AC</div>
          </button>
          <button
            data-testid="plus-minus"
            type="button"
            className="button calc-plus-minus"
          >
            <div className="cell">+/-</div>
          </button>
          <button data-testid="mod" type="button" className="button calc-mode">
            <div className="cell">%</div>
          </button>
          <button
            data-testid="division"
            type="button"
            className="button calc-division"
          >
            <div className="cell ">÷</div>
          </button>
          <button
            data-testid="no-seven"
            type="button"
            className="button calc-seven"
          >
            <div className="cell"> 7 </div>
          </button>
          <button
            data-testid="no-eight"
            type="button"
            className="button calc-eight"
          >
            <div className="cell"> 8 </div>
          </button>
          <button
            data-testid="no-nine"
            type="button"
            className="button calc-nine"
          >
            <div className="cell"> 9 </div>
          </button>
          <button
            data-testid="multi"
            type="button"
            className="button calc-multiply"
          >
            <div className="cell"> x </div>
          </button>
          <button
            data-testid="no-four"
            type="button"
            className="button calc-four"
          >
            <div className="cell"> 4 </div>
          </button>
          <button
            data-testid="no-five"
            type="button"
            className="button calc-five"
          >
            <div className="cell"> 5 </div>
          </button>
          <button
            data-testid="no-six"
            type="button"
            className="button calc-six"
          >
            <div className="cell"> 6 </div>
          </button>
          <button
            data-testid="minus"
            type="button"
            className="button calc-minus"
          >
            <div className="cell"> - </div>
          </button>
          <button
            data-testid="no-one"
            type="button"
            className="button calc-one"
          >
            <div className="cell"> 1 </div>
          </button>
          <button
            data-testid="no-two"
            type="button"
            className="button calc-two"
          >
            <div className="cell"> 2 </div>
          </button>
          <button
            data-testid="no-three"
            type="button"
            className="button calc-three"
          >
            <div className="cell"> 3 </div>
          </button>
          <button data-testid="plus" type="button" className="button calc-plus">
            <div className="cell"> + </div>
          </button>
          <button
            data-testid="no-zero"
            type="button"
            className="button calc-zero"
          >
            <div className="cell"> 0 </div>
          </button>
          <button data-testid="dot" type="button" className="button calc-dot">
            <div className="cell"> . </div>
          </button>
          <button
            data-testid="equal"
            type="button"
            className="button calc-equal"
          >
            <div className="cell">= </div>
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
