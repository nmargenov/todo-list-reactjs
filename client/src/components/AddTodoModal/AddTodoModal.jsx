import { useContext, useRef, useState } from "react";
import styles from "../shared/addEditTodoModal.module.css";
import { createTodo } from "../../services/todoService";
import { TodoContext } from "../../contexts/TodoContext";
import { GlobalSpinner } from "../GlobalSpinner/GlobalSpinner";
import { useForm } from "../../hooks/useForm";

export const AddTodoModal = () => {
  const { values, onInputChange, hasError, setHasError, checkLengthOnSubmit} = useForm();

  const [isCreating, setIsCreating] = useState(false);
  const { setTodos, onAddClose } = useContext(TodoContext);
  const formRef = useRef(null);

  function onSubmit(e) {
    e.preventDefault();
    checkLengthOnSubmit();

    setIsCreating(true);

    createTodo(values)
      .then((data) => {
        setTodos((oldState) => [...oldState, data]);
        setIsCreating(false);
        onAddClose(isCreating);
      })
      .catch((err) => {
        setIsCreating(false);
        setHasError(err);
      });
  }

  return (
    <div className={styles["modal-overlay"]}>
      <div
        onClick={() => onAddClose(isCreating)}
        className={styles["backdrop"]}
      ></div>
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
              disabled={isCreating}
            />
          </form>
          {hasError && <span className={styles["error-msg"]}>{hasError}</span>}
        </main>
        <footer>
          {isCreating && <GlobalSpinner />}
          {!isCreating && (
            <>
              <a
                onClick={() => onAddClose(isCreating)}
                className={styles["cancel-btn"]}
              >
                Cancel
              </a>
              <a
                onClick={() => formRef.current.requestSubmit()}
                className={styles["save-btn"]}
              >
                Save
              </a>
            </>
          )}
        </footer>
      </div>
    </div>
  );
};
