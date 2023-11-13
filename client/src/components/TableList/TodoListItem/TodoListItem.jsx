import styles from "./todoListItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { markAsDone } from "../../../services/todoService";
import { useContext, useState } from "react";
import { TodoContext } from "../../../contexts/TodoContext";
import { SmallSpinner } from "./SmallSpinner/SmallSpinner";
import { ModalContext } from "../../../contexts/ModalContext";

export const TodoListItem = ({ _id, description, isCompleted }) => {
  const [isSetting, setIsSetting] = useState(false);

  const { setTodos } = useContext(TodoContext);
  const { onDeleteOpen } = useContext(ModalContext);

  function onMarkAsDoneClick() {
    setIsSetting(true);
    markAsDone(_id)
      .then((data) => {
        setIsSetting(false);
        setTodos((oldState) =>
          oldState.map((t) =>
            t._id === data._id ? { ...t, isCompleted: !t.isCompleted } : t
          )
        );
      })
      .catch((err) => {
        setIsSetting(false);
        console.log(err);
      });
  }

  return (
    <li>
      <div className={styles["left"]}>
        <div
          className={
            isCompleted ? styles["is-completed"] : styles["is-ongoing"]
          }
        ></div>
        <span>{description}</span>
      </div>
      <div className={styles["buttons"]}>
        {!isSetting && (
          <>
            {!isCompleted && (
              <FontAwesomeIcon
                onClick={onMarkAsDoneClick}
                className={styles["check-btn"]}
                icon={faCheck}
              />
            )}
            {!isCompleted && (
              <FontAwesomeIcon className={styles["edit-btn"]} icon={faPen} />
            )}
            <FontAwesomeIcon onClick={()=>onDeleteOpen(_id)} className={styles["delete-btn"]} icon={faTrash} />
          </>
        )}
        {isSetting && <SmallSpinner/>}
      </div>
    </li>
  );
};
