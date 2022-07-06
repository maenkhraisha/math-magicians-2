import PropTypes from 'prop-types';

import Buttons from './buttons';
import Result from './result';

const Calculator = ({ updateResult, result }) => (
  <div className="calc-page-container">
    <div>
      <h2>The is Calculator Component</h2>
      <h2>Try it and Enjoy</h2>
    </div>
    <div className="calc-container">
      <Result result={result} />
      <Buttons updateResult={updateResult} />
    </div>
  </div>
);

Calculator.propTypes = {
  updateResult: PropTypes.func.isRequired,
  result: PropTypes.string.isRequired,
};
export default Calculator;
