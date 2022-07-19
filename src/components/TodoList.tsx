import { Trash } from "phosphor-react";
import clipboard from "../assets/clipboard.svg";
import styles from "./TodoList.module.css";

const todos = ["1", "2", "3"];

export function TodoList() {
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
            <label htmlFor={todo}>
              <input type="checkbox" id={todo} />
              <span className={styles.checkmark} />
              <span className={styles.todoContent}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur officiis molestias voluptatibus dolores provident
                sunt perferendis
              </span>

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
