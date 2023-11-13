import styles from "./todoListItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { markAsDone } from "../../../services/todoService";
import { useContext } from "react";
import { TodoContext } from "../../../contexts/TodoContext";

export const TodoListItem = ({ _id, description, isCompleted }) => {

  const { setTodos } = useContext(TodoContext);

  function onMarkAsDoneClick(){
    markAsDone(_id)
      .then((data)=>{
        setTodos(oldState=>oldState.map(t=> t._id === data._id ? { ...t, isCompleted: !t.isCompleted } : t))
      }).catch((err)=>{
        console.log(err);
      });
  }

  return (
    <li>
      <div className={styles["left"]}>
        <div className={isCompleted ? styles["is-completed"] : styles["is-ongoing"]}></div>
        <span>{description}</span>
      </div>
      <div className={styles["buttons"]}>
        {!isCompleted && <FontAwesomeIcon onClick={onMarkAsDoneClick} className={styles["check-btn"]} icon={faCheck} />}
        {!isCompleted && <FontAwesomeIcon className={styles["edit-btn"]} icon={faPen} />}
        <FontAwesomeIcon className={styles["delete-btn"]} icon={faTrash} />
      </div>
    </li>
  );
};
