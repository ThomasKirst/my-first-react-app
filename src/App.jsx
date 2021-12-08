import { useState } from 'react';
import './App.css';

import Form from './Form';
import Headline from './Headline';
import Todo from './Todo';

function App() {
  let initialTodos = [
    { title: 'Milch kaufen', color: 'yellow' }, // 0
    { title: 'Wohnung putzen', color: 'blue' }, // 1
    { title: 'React Doku lesen', color: 'green' },
    { title: 'Katze füttern', color: 'red' },
    { title: 'Glühwein im Glühwein Express trinken', color: 'red' },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const todoItems = todos.map((todo, index) => (
    <Todo key={index} title={todo.title} color={todo.color} />
  ));

  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  return (
    <div className="App">
      <Headline title="I am your shopping list" />

      <Form onAddTodo={addTodo} />

      <ul>{todoItems}</ul>
    </div>
  );
}

export default App;
