import { useState } from "react";
import "./Todo.css";

// Wird für jedes einzelne Todo ausgeführt
function Todo({ color, title }) {
  const [isDone, setIsDone] = useState(false); // initial: isDone = false

  function markAsDone() {
    // Zustandsänderung, ausgelöst durch den Checkbox-Klick (onChange)
    // Ursprungszustand -> Zielzustand (wie und wann entscheidet React)
    setIsDone(isDone ? false : true); //
    // State Change ? Flip da hook -> Re-render wird ausgelöst!
  }

  // isDone ist ein bool'scher Wert,
  // er muss nicht explizit mit === true verglichen werden
  const listItemLook = isDone ? "strike-through" : "";

  return (
    <li style={{ color: color }}>
      <label className={listItemLook}>
        <input className="Todo__input" type="checkbox" onChange={markAsDone} />{" "}
        {title}
      </label>
    </li>
  );
}

export default Todo;
