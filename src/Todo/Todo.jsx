import React from 'react';
import styles from './Todo.module.scss';

const Todo = (props) => {
  const Todos = props.todos;
  return (
    <main>
      {Todos.map((todo) => (
        <div key={todo.id}>
          <p className={todo.completed === true ? styles.true : styles.false}>
            {todo.text}
          </p>
        </div>
      ))}
    </main>
  );
};

export default Todo;
