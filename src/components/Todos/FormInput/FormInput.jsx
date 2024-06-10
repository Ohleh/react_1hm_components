import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// model.id = nanoid();

export default class FormInput extends Component {
  state = {
    id: '',
    task: '',
    message: '',
    complete: false,
  };
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value, id: nanoid() });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmitt(this.state);
    this.setState({ task: '', message: '' });
  };
  render() {
    const { message, task } = this.state;
    return (
      <>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Task Name
            <input
              type="text"
              value={task}
              name="task"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="">
            Task message
            <textarea
              id=""
              type="text"
              value={message}
              name="message"
              onChange={this.handleChange}
            ></textarea>
          </label>
          <button type="submit">Add task</button>
        </form>
      </>
    );
  }
}
