import styles from "./todoList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { TodoListItem } from "./TodoListItem/TodoListItem";

export const TodoList = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["header"]}>
        <FontAwesomeIcon icon={faList} />
        <span>Task Lists</span>
      </div>
      <div className={styles["main"]}>
        <ul>
          <TodoListItem/>
          <TodoListItem/>
          <TodoListItem/>
          <TodoListItem/>
          <TodoListItem/>
          <TodoListItem/>
          <TodoListItem/>
        </ul>
      </div>
      <div className={styles["footer"]}>
        <a className={styles["add-btn"]}>Add Task</a>
      </div>
    </div>
  );
};
