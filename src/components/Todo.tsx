import { Trash } from "phosphor-react";
import styles from "./Todo.module.css";

interface TodoProps {
  id: string;
  taskContent: string;
  onUpdateTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
  status: "todo" | "complete";
}

export function Todo({
  id,
  taskContent,
  status,
  onUpdateTask,
  onDeleteTask,
}: TodoProps) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleUpdateTask() {
    onUpdateTask(id);
  }

  const isTaskCompleted = status === "complete";

  return (
    <label className={styles.todo} key={id} htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        checked={isTaskCompleted}
        onChange={handleUpdateTask}
      />
      <span className={styles.checkmark} />
      <span className={styles.todoContent}>{taskContent}</span>

      <button onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </label>
  );
}
