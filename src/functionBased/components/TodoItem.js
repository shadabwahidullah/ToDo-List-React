import React, { useState, useEffect } from 'react';

import { FaTrash } from 'react-icons/fa';

// stylesheet
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  useEffect(() => {
  }, []);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdateDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const { todo } = props;
  const { completed, id, title } = todo;

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <button
          type="submit"
          className={styles.button}
          onClick={() => {
            props.deleteTodoProps(id);
          }}
        >
          <FaTrash />
        </button>
        <span style={todo.completed ? completedStyle : null}>
          {title}
        </span>
      </div>
      <input
        type="text"
        className={styles.textInput}
        style={editMode}
        value={title}
        onChange={(e) => {
          props.setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdateDone}
      />
    </li>
  );
};

export default TodoItem;
