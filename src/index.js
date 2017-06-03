import React from 'react';
import ReactDOM from 'react-dom';

import SubmitGuess from './SubmitGuess';

class Root extends React.Component {
  state = { count: 0 }

  addOne(amount) {
    this.setState({ count: this.state.count + amount })
  }

  render() {
    console.log(this.state.inputFieldValue)
    return (
      <div>
        <h3>Count: { this.state.count }</h3>
        <SubmitGuess handleSubmit={ this.addOne.bind(this) } />
      </div>
    )
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('container')
);
