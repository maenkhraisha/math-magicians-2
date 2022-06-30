import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Result extends React.Component {
  render() {
    const { result } = this.props;
    return (
      <div data-testid="result" className="calc-result">
        {result}
      </div>
    );
  }
}

Result.propTypes = {
  result: PropTypes.string.isRequired,
};
export default Result;
