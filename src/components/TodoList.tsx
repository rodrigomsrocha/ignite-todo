import { Trash } from "phosphor-react";
import clipboard from "../assets/clipboard.svg";
import styles from "./TodoList.module.css";

interface Todo {
  id: string;
  status: "todo" | "complete";
  taskContent: string;
}

interface TodoListProps {
  todos: Todo[];
}

export function TodoList({ todos }: TodoListProps) {
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
            <label key={todo.id} htmlFor={todo.id}>
              <input type="checkbox" id={todo.id} />
              <span className={styles.checkmark} />
              <span className={styles.todoContent}>{todo.taskContent}</span>

              <button>
                <Trash size={24} />
              </button>
            </label>
          ))}
        </main>
      )}
    </div>
  );
}
