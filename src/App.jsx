import './App.css';
import Button from './Button';
import Headline from './Headline';
import Todo from './Todo';

function App() {
  const todos = [
    { title: 'Milch kaufen', color: 'yellow' },
    { title: 'Wohnung putzen', color: 'blue' },
    { title: 'React Doku lesen', color: 'green' },
    { title: 'Katze füttern', color: 'red' },
  ];

  return (
    <div className="App">
      <Headline title="I am your todo list" />

      <ul>
        {todos.map((todo) => (
          <Todo title={todo.title} color={todo.color} />
        ))}
      </ul>
      <Button text="Click me!" />
      <Button isLarge text="I am the second button" />
    </div>
  );
}

export default App;
