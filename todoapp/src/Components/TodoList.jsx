import TodoItem from "./TodoItem";
import styles from "../assets/css/todolist.module.css";
export default function TodoList({ todos }) {
  return (
    <div className={styles.list}>
      {todos.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
}
