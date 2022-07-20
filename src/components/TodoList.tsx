import clipboard from "../assets/clipboard.svg";
import { Todo } from "./Todo";
import styles from "./TodoList.module.css";

interface Todo {
  id: string;
  status: "todo" | "complete";
  taskContent: string;
}

interface TodoListProps {
  todos: Todo[];
  getTodos: () => void;
}

export function TodoList({ todos, getTodos }: TodoListProps) {
  return (
    <div className={styles.todosContainer}>
      <header>
        <strong>
          Tarefas criadas<span>{todos.length}</span>
        </strong>
        <strong>
          Concluídas<span>0</span>
        </strong>
      </header>
      {todos.length === 0 ? (
        <main className={styles.todosEmpty}>
          <img src={clipboard} alt="prancheta" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </main>
      ) : (
        <main className={styles.todos}>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              getTodos={getTodos}
              id={todo.id}
              taskContent={todo.taskContent}
            />
          ))}
        </main>
      )}
    </div>
  );
}
