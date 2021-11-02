import React from "react";

import TodosList from "./TodosList";
import Header from "./Header";

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "setup development environment",
        completed: true,
      },
      {
        id: 2,
        title: "Develope website and add content",
        completed: true,
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false,
      },
    ],
  };

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  deleteTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  render() {
    return (
      <React.StrictMode>
        <div>
          <Header />
          <TodosList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.deleteTodo}
          />
        </div>
      </React.StrictMode>
    );
  }
}

export default TodoContainer;
