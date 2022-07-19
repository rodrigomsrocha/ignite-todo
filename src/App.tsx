import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { TodoList } from "./components/TodoList";

export function App() {
  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <Input />
        <TodoList />
      </main>
    </div>
  );
}
