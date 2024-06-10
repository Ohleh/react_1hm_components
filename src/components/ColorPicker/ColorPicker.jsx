import React, { Component } from 'react';
import './style.css';

class ColorPicker extends Component {
  state = {
    isMarked: 0,
  };

  addMarkedClass = index => {
    const color = ['marked'];

    if (this.state.isMarked === index) {
      color.push('marked__active');
    }

    return color.join(' ');
  };

  handleClick = index => {
    this.setState({ isMarked: index });
  };

  render() {
    const getId = this.props.docs[this.state.isMarked];
    return (
      <div>
        <h3>Choose document:</h3>
        <p>Document Id: {getId.id}</p>
        <ul>
          {this.props.docs.map(({ id, label, percentage }, index) => {
            return (
              <button
                key={id}
                onClick={() => this.handleClick(index)}
                className={this.addMarkedClass(index)}
              >
                {label}- {percentage}%
              </button>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ColorPicker;
