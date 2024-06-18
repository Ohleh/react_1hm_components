import React, { Component } from 'react';
import TodoList from './TodoList';
import FormInput from './FormInput';
import './todos.scss';

class Todos extends Component {
  state = {
    todos: this.props.todos,
  };
  deleteTask = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(el => el.id !== id),
    }));
  };

  handleAddTodo = addTodo => {
    console.log(addTodo);
    this.setState(prevState => ({
      todos: [...prevState.todos, addTodo],
    }));
  };

  checkboxComplite = id => {
    console.log(id);
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      }),
    }));
  };

  render() {
    const { todos } = this.state;
    const { handleAddTodo, deleteTask, checkboxComplite } = this;
    // const getToDo = todos.filter(todo => todo.complete);
    const getLeftRed = todos.reduce(
      (acc, todo) => (todo.complete ? acc + 1 : acc),
      0
    );

    return (
      <div className="todos">
        <h3 className="todos__title">Todos</h3>
        <p className="todos__counting">total:{todos.length}</p>
        <p className="todos__counting">Done:{getLeftRed}</p>
        <FormInput onSubmitt={handleAddTodo} />
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
