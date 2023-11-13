import { useContext, useEffect, useRef, useState } from "react";
import styles from "../shared/addEditTodoModal.module.css";
import { ModalContext } from "../../contexts/ModalContext";
import { useForm } from "../../hooks/useForm";
import { editTodoById } from "../../services/todoService";
import { TodoContext } from "../../contexts/TodoContext";
import { SmallSpinner } from "../TableList/TodoListItem/SmallSpinner/SmallSpinner";

export const EditTodoModal = () => {
  const formRef = useRef(null);
  const { onEditClose, editTodo } = useContext(ModalContext);
  const { setTodos } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const {
    values,
    setValues,
    onInputChange,
    hasError,
    setHasError,
  } = useForm();

  useEffect(() => {
    setValues({ description: editTodo.description });
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    if (values.description.length < 2) {
      setHasError("Description must be at least 2 characters long!");
      return;
  }
    setIsEditing(true);


    editTodoById(editTodo._id,values)
      .then((data) => {
        setTodos(oldState => oldState.map(t=>t._id === data._id ? {...t, description:data.description} : {...t}));
        setIsEditing(false);
        onEditClose(isEditing);
      })
      .catch((err) => {
        setIsEditing(false);
        setHasError(err);
      });
  }

  return (
    <div className={styles["modal-overlay"]}>
      <div onClick={() => onEditClose(isEditing)} className={styles["backdrop"]}></div>
      <div className={styles["modal"]}>
        <header>
          <h2>Edit Todo</h2>
        </header>
        <main>
          <form ref={formRef} onSubmit={onSubmit}>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Edit todo here..."
              onChange={onInputChange}
              value={values.description}
              disabled={isEditing}
            />
          </form>
          {hasError && <span className={styles["error-msg"]}>{hasError}</span>}
        </main>
        <footer>
         {!isEditing && <>
          <a onClick={() => onEditClose(isEditing)} className={styles["cancel-btn"]}>
            Cancel
          </a>
          <a onClick={()=>formRef.current.requestSubmit()} className={styles["save-btn"]}>Save</a>
          </>}
          {isEditing && <SmallSpinner/>}
        </footer>
      </div>
    </div>
  );
};
