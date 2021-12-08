import Todo from './Todo';

export default function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <Todo key={index} title={todo.title} color={todo.color} />
      ))}
    </ul>
  );
}
