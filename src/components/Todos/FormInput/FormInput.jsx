import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import './formInput.scss';
import { click } from '@testing-library/user-event/dist/click';

export default class FormInput extends Component {
  state = {
    id: '',
    task: '',
    message: '',
    complete: false,
    invalidForm: false,
    dublicate: false,
  };

  taskId = nanoid(10);
  messageId = nanoid(10);

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
      id: nanoid(),
      invalidForm: false,
      dublicate: false,
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    const validInputs = this.validateForm(this.state);
    const checkControl = this.checkRepeat(this.state);
    if (checkControl) {
      const repeatedTask = checkControl.task;
      console.log(repeatedTask);
      return this.setState({ dublicate: repeatedTask });
      //  return alert(`'you have already duplicate', ${checkControl.task}`);
    }

    if (validInputs) {
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

  checkRepeat({ task }) {
    const { todos } = this.props;
    // const { task } = this.state;
    const checkFilter = todos.find(todo => todo.task === task);

    return checkFilter;
  }

  render() {
    const { message, task, invalidForm, dublicate } = this.state;
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
            {dublicate && <span>you have duplicate {dublicate}</span>}
            {invalidForm ? (
              <span>fill form pls</span>
            ) : (
              <button type="submit" disabled={dublicate}>
                Add task
              </button>
            )}
          </form>
        </section>
      </>
    );
  }
}
