import { useEffect, useState } from "react";
import styles from "./app.module.css";
import { AddTodoModal } from "./components/AddTodoModal/AddTodoModal";
import { EditTodoModal } from "./components/EditTodoModal/EditTodoModal";
import { TodoList } from "./components/TableList/TodoList";
import { TodoContext } from "./contexts/TodoContext";
import { DeleteModal } from "./components/DeleteModal/DeleteModal";
import { ModalContext } from "./contexts/ModalContext";
import { getTodoById } from "./services/todoService";

function App() {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [todos, setTodos] = useState([]);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editTodo, setEditTodo] = useState(null);

  function onAddOpen() {
    setIsAddOpen(true);
  }

  function onAddClose(isCreating) {
    if (isCreating) {
      return;
    }
    setIsAddOpen(false);
  }

  const context = {
    todos,
    setTodos,
    onAddClose,
    onAddOpen,
  };

  function onDeleteOpen(id) {
    setIsDeleteOpen(true);
    setDeleteId(id);
  }
  function onDeleteClose() {
    setIsDeleteOpen(false);
  }

  function onEditClose(isEditing) {
    if(isEditing){
      return;
    }
    setIsEditOpen(false);
  }
  const modalContext = {
    deleteId,
    isDeleteOpen,
    onDeleteClose,
    onDeleteOpen,
    editTodo,
    setEditTodo,
    isEditOpen,
    onEditClose,
    setIsEditOpen
  };

  return (
    <TodoContext.Provider value={context}>
      <ModalContext.Provider value={modalContext}>
        <main className={styles["main"]}>
          <TodoList />
          {isAddOpen && <AddTodoModal />}
          {isEditOpen && <EditTodoModal />}
          {isDeleteOpen && <DeleteModal />}
        </main>
      </ModalContext.Provider>
    </TodoContext.Provider>
  );
}

export default App;
