import React from 'react';

import TodoItem from './TodoItem';

const TodosList = (props) => {
  const [todos, handleChangeProps, deleteTodoProps, setUpdate] = props;
  return (
    <ul>
      {todos.map((todo) => {
        const [id] = todos;
        return (
          <TodoItem
            key={id}
            todo={todo}
            handleChangeProps={handleChangeProps}
            deleteTodoProps={deleteTodoProps}
            setUpdate={setUpdate}
          />
        );
      })}
    </ul>
  );
};

export default TodosList;
