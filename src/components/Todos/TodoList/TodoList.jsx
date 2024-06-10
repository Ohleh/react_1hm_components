import React, { Component } from 'react';

export default class TodoList extends Component {
  render() {
    const { todos, handleDelete } = this.props;
    return (
      <div>
        <ul>
          {todos.map(({ complete, id, task }) => (
            <li key={id}>
              <input type="checkbox" />

              <p>{task}</p>
              <button type="button" onClick={() => handleDelete(id)}>
                Delete Task
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
