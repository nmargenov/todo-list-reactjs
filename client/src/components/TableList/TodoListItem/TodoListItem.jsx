import styles from "./todoListItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

export const TodoListItem = ({ _id, description, isCompleted }) => {
  return (
    <li>
      <div className={styles["left"]}>
        <div className={isCompleted ? styles["is-completed"] : styles["is-ongoing"]}></div>
        <span>{description}</span>
      </div>
      <div className={styles["buttons"]}>
        {!isCompleted && <FontAwesomeIcon className={styles["check-btn"]} icon={faCheck} />}
        {!isCompleted && <FontAwesomeIcon className={styles["edit-btn"]} icon={faPen} />}
        <FontAwesomeIcon className={styles["delete-btn"]} icon={faTrash} />
      </div>
    </li>
  );
};
