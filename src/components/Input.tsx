import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import styles from "./Input.module.css";

interface InputProps {
  onCreateTask: (taskContent: string) => void;
}

export function Input({ onCreateTask }: InputProps) {
  const [taskContent, setTaskContent] = useState("");

  function handleCreateTask(e: FormEvent) {
    e.preventDefault();
    onCreateTask(taskContent);
  }

  function handleTaskTextChange(e: ChangeEvent<HTMLInputElement>) {
    e.target.setCustomValidity("");
    setTaskContent(e.target.value);
  }

  function handleInvalidTaskText(e: InvalidEvent<HTMLInputElement>) {
    e.target.setCustomValidity("Esse campo é obrigatório");
  }

  return (
    <form className={styles.form} onSubmit={handleCreateTask}>
      <input
        onChange={handleTaskTextChange}
        value={taskContent}
        type="text"
        placeholder="Adicione uma nova tarefa"
        required
        onInvalid={handleInvalidTaskText}
      />
      <button type="submit">
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  );
}
