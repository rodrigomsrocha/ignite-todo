import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Input } from "./components/Input";

export function App() {
  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <Input />
      </main>
    </div>
  );
}
