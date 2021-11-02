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

  handleChange = () => {
    console.log("todocontainer");
  };

  render() {
    return (
      <div>
        <Header />
        <TodosList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
        />
      </div>
    );
  }
}

export default TodoContainer;
