import React, { Component } from 'react';

class Counter extends Component {
  //   static defaultProps = {
  //     step: 1,
  //   };
  handleIncrement = evt => {
    console.log('Increment button was clicked!', evt);
    console.log(this.props);
  };
  handleDecrement = evt => {
    console.log('Decrement button was clicked!', evt);
    console.log(this.props);
  };

  render() {
    const { step, head } = this.props;
    return (
      <div>
        <span style={{ display: 'block' }}>0 {head}</span>
        <button onClick={this.handleIncrement}>Increment by {step}</button>
        <button onClick={this.handleDecrement}>Increment by {step}</button>
        <Toggle stepInit={step} />
        <CounterRepeta initialValue={12} />
      </div>
    );
  }
}

class Toggle extends Counter {
  state = { status: 'hide', online: false, step: this.props.stepInit };
  isOnline = () => {
    this.setState({ online: true, status: 'show' });
    console.log(this.state.status);
    console.log(this.state);
  };

  isOffline = () => {
    this.setState({ online: false, status: 'hide' });
    console.log(this.state.status);
    console.log(this.state);
  };
  render() {
    const { stepInit } = this.props;
    return (
      <>
        <button onClick={this.isOnline}>Online</button>
        <button onClick={this.isOffline}>Offline</button>
        <button onClick={this.isOffline}>{stepInit}</button>
        {this.state.online && <span>{this.state.step}</span>}
      </>
    );
  }
}

export default Counter;

class CounterRepeta extends Counter {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };
  render() {
    return (
      <div>
        <p>{this.state.value}</p>
        <button type="button" onClick={this.handleIncrement}>
          Increment
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement
        </button>
      </div>
    );
  }
}
