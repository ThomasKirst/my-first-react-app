import './App.css';
import Button from './Button';
import Headline from './Headline';

function Todo({ color, title }) {
  return <li style={{ color: color }}>{title}</li>;
}

function App() {
  return (
    <div className="App">
      <Headline title="I am your shopping list" />

      <ul>
        <Todo title="Milch kaufen" color="yellow" />
        <Todo title="Wohnung putzen" color="blue" />
        <Todo title="React Doku lesen" color="green" />
        <Todo title="Katze füttern" color="red" />
      </ul>

      <Button text="Click me!" />
      <Button isLarge text="I am the second button" />
    </div>
  );
}

export default App;
