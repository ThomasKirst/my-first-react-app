import { useState } from 'react';

import './Todo.css';

function Todo({ color, title }) {
  const [isDone, setIsDone] = useState(false);

  function markAsDone() {
    setIsDone(!isDone);
  }

  return (
    <li style={{ color: color }}>
      <label className={isDone ? 'label--strike-through' : ''}>
        <input type="checkbox" onChange={markAsDone} /> {title}
      </label>
    </li>
  );
}

export default Todo;
