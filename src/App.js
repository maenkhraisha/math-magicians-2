import React from 'react';
import Calculator from './components/calculator/calculator';
import Result from './components/calculator/result';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  constructor() {
    super();
    this.updateResult = this.updateResult.bind(this);
    this.state = {
      result: 0,
    };
  }

  updateResult(value) {
    this.setState({ result: value });
  }

  render() {
    const { result } = this.state;
    return (
      <div>
        <Result result={result} />
        <Calculator updateResult={this.updateResult} />
      </div>
    );
  }
}

export default App;
