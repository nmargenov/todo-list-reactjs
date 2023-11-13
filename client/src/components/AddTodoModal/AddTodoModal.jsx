import { useContext, useRef, useState } from "react";
import styles from "../shared/addEditTodoModal.module.css";
import { createTodo } from "../../services/todoService";
import { TodoContext } from "../../contexts/TodoContext";

export const AddTodoModal = ({ onAddClose }) => {
  const initialValues = {
    description: "",
  };
  const [values, setValues] = useState(initialValues);
  const { todos, setTodos } = useContext(TodoContext);
  const formRef = useRef(null);

  function onInputChange(e) {
    setValues((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  }

  function onSubmit(e) {
    e.preventDefault();
    createTodo(values).then((data) => {
      setTodos((oldState) => [...oldState , data]);
      onAddClose();
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div className={styles["modal-overlay"]}>
      <div onClick={onAddClose} className={styles["backdrop"]}></div>
      <div className={styles["modal"]}>
        <header>
          <h2>Create Todo</h2>
        </header>
        <main>
          <form ref={formRef} onSubmit={onSubmit}>
            <input
              onChange={onInputChange}
              value={values.description}
              type="text"
              name="description"
              id="description"
              placeholder="Write todo here..."
            />
          </form>
        </main>
        <footer>
          <a onClick={onAddClose} className={styles["cancel-btn"]}>
            Cancel
          </a>
          <a
            onClick={() => formRef.current.requestSubmit()}
            className={styles["save-btn"]}
          >
            Save
          </a>
        </footer>
      </div>
    </div>
  );
};
