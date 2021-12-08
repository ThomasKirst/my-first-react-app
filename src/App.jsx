import { useEffect, useState } from 'react';
import './App.css';

import Form from './Form';
import Headline from './Headline';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos')) ?? []);
  }, []); // On first render: load local storage items if possible

  useEffect(
    () => localStorage.setItem('todos', JSON.stringify(todos)),
    [todos] // Dependency Array
  );

  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  return (
    <div className="App">
      <Headline title="I am your shopping list" />
      <Form onAddTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
