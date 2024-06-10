import React, { Component } from 'react';
import TodoList from './TodoList';
import FormInput from './FormInput';

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

  render() {
    const { todos } = this.state;
    console.log(todos);
    // const getToDo = todos.filter(todo => todo.complete);
    const getLeftRed = todos.reduce(
      (acc, todo) => (todo.complete ? acc + 1 : acc),
      0
    );

    return (
      <div>
        <h3>Todos</h3>
        <p>total:{todos.length}</p>
        <p>Done:{getLeftRed}</p>
        <FormInput onSubmitt={this.handleAddTodo} />
        <TodoList todos={todos} handleDelete={this.deleteTask} />
      </div>
    );
  }
}

export default Todos;
