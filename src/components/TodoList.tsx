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
  onUpdateTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function TodoList({ todos, onDeleteTask, onUpdateTask }: TodoListProps) {
  const finishedTodos = todos.reduce((acc, task) => {
    if (task.status === "complete") {
      return acc + 1;
    }
    return acc;
  }, 0);

  return (
    <div className={styles.todosContainer}>
      <header>
        <strong>
          Tarefas criadas<span>{todos.length}</span>
        </strong>
        <strong>
          Concluídas
          <span>
            {finishedTodos} de {todos.length}
          </span>
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
              onUpdateTask={onUpdateTask}
              onDeleteTask={onDeleteTask}
              key={todo.id}
              id={todo.id}
              taskContent={todo.taskContent}
              status={todo.status}
            />
          ))}
        </main>
      )}
    </div>
  );
}
