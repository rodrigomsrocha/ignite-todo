import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { TodoList } from "./components/TodoList";
import { api } from "./services/api";

export function App() {
  const [todos, setTodos] = useState([]);

  async function getTodos() {
    const { data } = await api.get("/");
    setTodos(data.todos);
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <Input getTodos={getTodos} />
        <TodoList todos={todos} />
      </main>
    </div>
  );
}
