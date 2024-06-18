import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import './formInput.scss';

export default class FormInput extends Component {
  state = {
    id: '',
    task: '',
    message: '',
    complete: false,
    invalidForm: false,
  };

  taskId = nanoid(10);
  messageId = nanoid(10);

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value, id: nanoid(), invalidForm: false });
  };
  handleSubmit = e => {
    e.preventDefault();
    const validIputs = this.validateForm(this.state);
    if (validIputs) {
      this.props.onSubmitt(this.state);
      this.setState({ task: '', message: '' });
    } else {
      this.setState({ invalidForm: true });
    }
  };

  validateForm = inpt => {
    const isValid = !!inpt.task && !!inpt.message;
    return isValid;
  };

  render() {
    const { message, task, invalidForm } = this.state;
    const { taskId, messageId } = this;

    return (
      <>
        <section className="formInput">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor={taskId}>
              Task Name
              <input
                id={taskId}
                type="text"
                value={task}
                name="task"
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor={messageId}>
              Task message
              <textarea
                type="text"
                value={message}
                name="message"
                onChange={this.handleChange}
                id={messageId}
              ></textarea>
            </label>
            {invalidForm && <span>enter form pls</span>}
            <button type="submit">Add task</button>
          </form>
        </section>
      </>
    );
  }
}
