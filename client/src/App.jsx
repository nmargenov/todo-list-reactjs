import { useState } from "react";
import styles from "./app.module.css";
import { AddTodoModal } from "./components/AddTodoModal/AddTodoModal";
import { EditTodoModal } from "./components/EditTodoModal/EditTodoModal";
import { TodoList } from "./components/TableList/TodoList";
import { TodoContext } from "./contexts/TodoContext";

function App() {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [todos, setTodos] = useState([]);

  function onAddOpen() {
    setIsAddOpen(true);
  }

  function onAddClose(isCreating) {
    if(isCreating){
      return;
    }
    setIsAddOpen(false);
  }

  const context = {
    todos,
    setTodos,
    onAddClose,
    onAddOpen
  }

  return (
    <TodoContext.Provider value={context}>
      <main className={styles["main"]}>
        <TodoList />
        {isAddOpen && <AddTodoModal/>}
        {/* <EditTodoModal/> */}
      </main>
    </TodoContext.Provider>
  );
}

export default App;
