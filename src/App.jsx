import { useState } from "react";
import "./App.css";

import Form from "./components/Form";
import Headline from "./components/Headline";
import Todo from "./components/Todo";

function App() {
  const initialTodos = [
    { title: "Milch kaufen", color: "goldenrod" }, // 0
    { title: "Wohnung putzen", color: "blue" }, // 1
    { title: "React Doku lesen", color: "green" },
    { title: "Katze füttern", color: "red" },
    { title: "Glühwein im Glühwein Express trinken", color: "red" },
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

      <ul className="App__list">{todoItems}</ul>
    </div>
  );
}

export default App;
