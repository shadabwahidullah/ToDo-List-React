import React from "react";

//stylesheet
import styles from "./TodoItem.module.css";

class TodoItem extends React.Component {

  state = {
    editing: false,
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  }

  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    };

    const { completed, id, title } = this.props.todo;

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)}
          />
          <button
            className={styles.button}
            onClick={() => this.props.deleteTodoProps(id)}
          >
            Delete
          </button>
          <span style={this.props.todo.completed ? completedStyle : null}>
            {title}
          </span>
        </div>
        <input type="text" className={styles.textInput}></input>
      </li>
    );
  }
}

export default TodoItem;
