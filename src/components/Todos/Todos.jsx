import React, { Component } from 'react';

import TodoList from './TodoList';
import FormInput from './FormInput';
import './todos.scss';

class Todos extends Component {
  state = {
    todos: this.props.todos,
    filter: '',
    dublicate: false,
  };
  deleteTask = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(el => el.id !== id),
    }));
  };

  handleAddTodo = addTodo => {
    const checkDublicate = this.state.todos.find(
      todo => todo.task === addTodo.task
    );
    if (checkDublicate) {
      return this.setState({ dublicate: checkDublicate.task });
    }

    if (!addTodo.task || !addTodo.message) {
      return console.log('fill form');
    }
    this.setState(prevState => ({
      todos: [addTodo, ...prevState.todos],
      dublicate: false,
    }));
  };

  checkboxComplite = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      }),
    }));
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  getFilteredTodos() {
    const { todos, filter } = this.state;

    if (!filter) {
      return todos;
    }

    const filterNormalise = filter.toLocaleLowerCase();
    const filteredTodos = todos.filter(({ task, message }) => {
      const taskNormalise = task.toLocaleLowerCase();
      const messageNormalise = message.toLocaleLowerCase();
      const result =
        taskNormalise.includes(filterNormalise) ||
        messageNormalise.includes(filterNormalise);
      return result;
    });
    return filteredTodos;
  }

  render() {
    const { filter, dublicate } = this.state;
    const { handleAddTodo, deleteTask, checkboxComplite, handleChange } = this;
    const todos = this.getFilteredTodos();
    // const getToDo = todos.filter(todo => todo.complete);
    const getLeftRed = todos.reduce(
      (acc, todo) => (todo.complete ? acc + 1 : acc),
      0
    );

    return (
      <div className="todos">
        <h3 className="todos__title">Todos</h3>
        <span className="todos__counting">total:{todos.length}. </span>
        <span className="todos__counting">Done:{getLeftRed}</span>
        <FormInput onSubmitt={handleAddTodo} dublicate={dublicate} />

        <label htmlFor="wq1">
          Find todo:
          <input
            id="wq1"
            type="text"
            name="filter"
            value={filter}
            onChange={handleChange}
          ></input>
        </label>

        <TodoList
          todos={todos}
          handleDelete={deleteTask}
          handleCheckbox={checkboxComplite}
        />
      </div>
    );
  }
}

export default Todos;
