import { useState } from 'react';
import './App.css';

import Form from './Form';
import Headline from './Headline';
import Todo from './Todo';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos')) ?? []);
  }, []); // On first render: load local storage items if possible

  useEffect(
    () => localStorage.setItem('todos', JSON.stringify(todos)),
    [todos] // Dependency Array
  );

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
