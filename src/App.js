import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* import components */
import Header from './components/Header';
import Calculator from './components/calculator/calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';

import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  constructor() {
    super();
    this.updateResult = this.updateResult.bind(this);
    this.state = {
      result: '0',
    };
  }

  updateResult(value) {
    this.setState({ result: value });
  }

  render() {
    const { result } = this.state;

    return (
      <div className="container">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/calculator"
              element={
                <Calculator updateResult={this.updateResult} result={result} />
              }
            />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
