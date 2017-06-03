import React from 'react';

export default class SubmitGuess extends React.Component {
  state = { inputFieldValue: ''}

  setInputValue(e) {
    const parsedInt = parseInt(e.target.value, 10);
    if (isNaN(parsedInt)) {
      this.setState({ inputFieldValue: 0 })
    } else {
      this.setState({ inputFieldValue: parsedInt });
    }
  }

  increaseCount() {
    this.props.handleSubmit(this.state.inputFieldValue);
  }

  render() {
    return (
      <div>
        <input onChange={ this.setInputValue.bind(this) } />
        <button onClick={ this.increaseCount.bind(this) }>Submit!</button>
      </div>
    )
  }
}
