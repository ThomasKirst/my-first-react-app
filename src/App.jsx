import { useState } from 'react';
import './App.css';
import Button from './Button';
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

  function addTodo(event) {
    // Formular nicht abschicken (Kein Server, der die Daten aufnimmt, mir machen etwas lokal (im Browser) damit)
    event.preventDefault();

    // Event wurde im Formular ausgelöst, event.target (auslösende Element)
    const form = event.target;
    const inputField = form.color;
    const inputValue = inputField.value;

    // deklariert und initialisiert mit einem Objekt
    const newTodo = {
      title: inputValue,
      color: 'gray',
    };

    setTodos([...todos, newTodo]);
  }

  return (
    <div className="App">
      <Headline title="I am your shopping list" />

      <form onSubmit={addTodo}>
        <input type="text" name="todo" placeholder="Add a todo …" />
        <Button text="Submit" />
      </form>

      <ul>{todoItems}</ul>
    </div>
  );
}

export default App;
