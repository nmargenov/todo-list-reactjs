import styles from "./todoListItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

export const TodoListItem = () => {
  return (
    <li>
      <div className={styles["left"]}>
        <div className={styles["is-ongoing"]}></div>
        <span>text</span>
      </div>
      <div className={styles["buttons"]}>
        <FontAwesomeIcon className={styles["check-btn"]} icon={faCheck} />
        <FontAwesomeIcon className={styles["edit-btn"]} icon={faPen} />
        <FontAwesomeIcon className={styles["delete-btn"]} icon={faTrash} />
      </div>
    </li>
  );
};
