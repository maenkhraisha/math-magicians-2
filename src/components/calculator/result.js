/* eslint-disable */
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Result extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    const res = this.props.result;
    return (
      <div data-testid="result" className="calc-result">
        {res}
      </div>
    );
  }
}

export default Result;
