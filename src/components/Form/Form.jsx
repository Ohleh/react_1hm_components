import React, { Component } from 'react';

class Form extends Component {
  state = {
    inputValue: '',
  };
  handleChange = evt => {
    this.setState({ inputValue: evt.currentTarget.value });
  };
  render() {
    const { inputValue } = this.state;
    return (
      <>
        <input
          type="text"
          value={inputValue}
          onChange={this.handleChange}
        ></input>
      </>
    );
  }
}

export default Form;
