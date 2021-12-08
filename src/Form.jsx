import Button from './Button';

export default function Form({ onAddTodo }) {
  function onFormSubmit(event) {
    // Formular nicht abschicken (Kein Server, der die Daten aufnimmt, mir machen etwas lokal (im Browser) damit)
    event.preventDefault();

    // Event wurde im Formular ausgelöst, event.target (auslösende Element)
    const form = event.target;
    const inputField = form.todo;
    const inputValue = inputField.value;

    // deklariert und initialisiert mit einem Objekt
    const newTodo = {
      title: inputValue,
      color: 'gray',
    };

    onAddTodo(newTodo);
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input type="text" name="todo" placeholder="Add a todo …" />
      <Button text="Submit" />
    </form>
  );
}
