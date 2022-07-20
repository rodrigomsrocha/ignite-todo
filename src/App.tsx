import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { TodoList } from "./components/TodoList";
import { api } from "./services/api";

interface Todo {
  id: string;
  taskContent: string;
  status: "todo" | "complete";
}

export function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  async function getTodos() {
    const { data } = await api.get("/");
    setTodos(data.todos);
  }

  function createTask(taskContent: string) {
    api.post("/", {
      taskContent,
    });
    getTodos();
  }

  function updateTask(id: string) {
    const taskToBeUpdated = todos.find((task) => task.id === id);

    if (!taskToBeUpdated) return;
    api.patch(`/${id}`, {
      status: taskToBeUpdated.status === "todo" ? "complete" : "todo",
    });
    getTodos();
  }

  function deleteTask(id: string) {
    api.delete(`/${id}`);
    getTodos();
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <Input onCreateTask={createTask} />
        <TodoList
          getTodos={getTodos}
          onUpdateTask={updateTask}
          onDeleteTask={deleteTask}
          todos={todos}
        />
      </main>
    </div>
  );
}
