import React from 'react';

import TodoItem from './TodoItem';

const TodosList = (props) => {
  const { todos } = props;
  return (
    <ul>
      {todos.map((todo) => {
        const [id] = todos;
        return (
          <TodoItem
            key={id}
            todo={todo}
            handleChangeProps={props.handleChangeProps}
            deleteTodoProps={props.deleteTodoProps}
            setUpdate={props.setUpdate}
          />
        );
      })}
    </ul>
  );
};

export default TodosList;
