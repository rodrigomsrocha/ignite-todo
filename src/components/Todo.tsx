import { Trash } from "phosphor-react";
import { api } from "../services/api";
import styles from "./Todo.module.css";

interface TodoProps {
  id: string;
  taskContent: string;
  getTodos: () => void;
}

export function Todo({ id, taskContent, getTodos }: TodoProps) {
  function handleDeleteTask() {
    api.delete(`/${id}`);
    getTodos();
  }

  return (
    <label className={styles.todo} key={id} htmlFor={id}>
      <input type="checkbox" id={id} />
      <span className={styles.checkmark} />
      <span className={styles.todoContent}>{taskContent}</span>

      <button onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </label>
  );
}
