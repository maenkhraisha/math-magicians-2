import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './calculator.css';
import calculate from './logic/calculate';

function prepareData(expresion) {
  let { total, operation, next } = expresion;
  total = total || '';
  operation = operation || '';
  next = next || '';
  let result = total + operation + next;
  result = result === '' ? 0 : result;
  return result;
}
// eslint-disable-next-line react/prefer-stateless-function
const Calculator = (props) => {
  const [expresion, setExpresion] = useState({
    total: 0,
    next: 0,
    operation: null,
  });

  const clickHandler = (e) => {
    const { updateResult } = props;
    const btnName = e.target.innerText;
    const newExpresion = calculate(expresion, btnName);
    setExpresion(newExpresion, () => {
      const result = prepareData(newExpresion);
      updateResult(result);
    });
  };

  return (
    <div className="calc-container">
      <div className="calc-buttons">
        <button
          data-testid="ac"
          type="button"
          className="button calc-ac"
          onClick={clickHandler}
        >
          <div className="cell">AC</div>
        </button>
        <button
          data-testid="plus-minus"
          type="button"
          className="button calc-plus-minus"
          onClick={clickHandler}
        >
          <div className="cell">+/-</div>
        </button>
        <button
          data-testid="mod"
          type="button"
          className="button calc-mode"
          onClick={clickHandler}
        >
          <div className="cell">%</div>
        </button>
        <button
          data-testid="division"
          type="button"
          className="button calc-division"
          onClick={clickHandler}
        >
          <div className="cell ">÷</div>
        </button>
        <button
          data-testid="no-seven"
          type="button"
          className="button calc-seven"
          onClick={clickHandler}
        >
          <div className="cell"> 7 </div>
        </button>
        <button
          data-testid="no-eight"
          type="button"
          className="button calc-eight"
          onClick={clickHandler}
        >
          <div className="cell"> 8 </div>
        </button>
        <button
          data-testid="no-nine"
          type="button"
          className="button calc-nine"
          onClick={clickHandler}
        >
          <div className="cell"> 9 </div>
        </button>
        <button
          data-testid="multi"
          type="button"
          className="button calc-multiply"
          onClick={clickHandler}
        >
          <div className="cell"> x </div>
        </button>
        <button
          data-testid="no-four"
          type="button"
          className="button calc-four"
          onClick={clickHandler}
        >
          <div className="cell"> 4 </div>
        </button>
        <button
          data-testid="no-five"
          type="button"
          className="button calc-five"
          onClick={clickHandler}
        >
          <div className="cell"> 5 </div>
        </button>
        <button
          data-testid="no-six"
          type="button"
          className="button calc-six"
          onClick={clickHandler}
        >
          <div className="cell"> 6 </div>
        </button>
        <button
          data-testid="minus"
          type="button"
          className="button calc-minus"
          onClick={clickHandler}
        >
          <div className="cell"> - </div>
        </button>
        <button
          data-testid="no-one"
          type="button"
          className="button calc-one"
          onClick={clickHandler}
        >
          <div className="cell"> 1 </div>
        </button>
        <button
          data-testid="no-two"
          type="button"
          className="button calc-two"
          onClick={clickHandler}
        >
          <div className="cell"> 2 </div>
        </button>
        <button
          data-testid="no-three"
          type="button"
          className="button calc-three"
          onClick={clickHandler}
        >
          <div className="cell"> 3 </div>
        </button>
        <button
          data-testid="plus"
          type="button"
          className="button calc-plus"
          onClick={clickHandler}
        >
          <div className="cell"> + </div>
        </button>
        <button
          data-testid="no-zero"
          type="button"
          className="button calc-zero"
          onClick={clickHandler}
        >
          <div className="cell"> 0 </div>
        </button>
        <button
          data-testid="dot"
          type="button"
          className="button calc-dot"
          onClick={clickHandler}
        >
          <div className="cell"> . </div>
        </button>
        <button
          data-testid="equal"
          type="button"
          className="button calc-equal"
          onClick={clickHandler}
        >
          <div className="cell">=</div>
        </button>
      </div>
    </div>
  );
};

Calculator.propTypes = {
  updateResult: PropTypes.func.isRequired,
};
export default Calculator;
