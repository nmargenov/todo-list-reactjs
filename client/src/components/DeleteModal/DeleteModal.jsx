import { useContext } from "react";
import styles from "../shared/addEditTodoModal.module.css";
import { ModalContext } from "../../contexts/ModalContext";
import { deleteTodo } from "../../services/todoService";
import { TodoContext } from "../../contexts/TodoContext";

export const DeleteModal = () => {
  const { onDeleteClose, deleteId } = useContext(ModalContext);
  const { setTodos } = useContext(TodoContext);

  function onDeleteClick() {
    deleteTodo(deleteId)
      .then((data) => {
        setTodos((oldState) => oldState.filter((t) => t._id !== data._id));
        onDeleteClose();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className={styles["modal-overlay"]}>
      <div onClick={() => onDeleteClose()} className={styles["backdrop"]}></div>
      <div className={styles["modal"]}>
        <header>
          <h2>Create Todo</h2>
        </header>
        <main>
          <h2>Are you sure you want to delete this task?</h2>
        </main>
        <footer>
          <a onClick={() => onDeleteClose()} className={styles["cancel-btn"]}>
            Cancel
          </a>
          <a onClick={onDeleteClick} className={styles["save-btn"]}>
            Delete
          </a>
        </footer>
      </div>
    </div>
  );
};
