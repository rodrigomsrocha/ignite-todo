import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { api } from "../services/api";
import styles from "./Input.module.css";

interface InputProps {
  getTodos: () => void;
}

export function Input({ getTodos }: InputProps) {
  const [taskContent, setTaskContent] = useState("");

  function handleCreateTask(e: FormEvent) {
    e.preventDefault();
    api.post("/", {
      taskContent,
    });
    getTodos();
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
