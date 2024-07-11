import React from 'react';
import Todo from './Todo/Todo';

const App = () => {
  const todos = [
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Build a React app', completed: false },
    { id: 3, text: 'Explore advanced React topics', completed: false },
  ];
  return (
    <div>
      <Todo todos={todos} />
    </div>
  );
};

export default App;
