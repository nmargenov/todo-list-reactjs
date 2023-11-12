import styles from "./todoList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { TodoListItem } from "./TodoListItem/TodoListItem";

import { useEffect, useState } from "react";
import { getAllTodos } from "../../services/todoService";
import { NoTodos } from "./NoTodos/NoTodos";
import { Spinner } from "../Spinner/Spinner";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAllTodos()
      .then((data) => {
        setIsLoading(false);
        setTodos(data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <div className={styles["container"]}>
      <div className={styles["header"]}>
        <FontAwesomeIcon icon={faList} />
        <span>Task Lists</span>
      </div>
      <div className={styles["main"]}>
        <ul>
          {isLoading && <Spinner/>}
          {(!isLoading && todos.length === 0) && <NoTodos />}
          {(!isLoading && todos.length > 0) &&
            todos.map((t) => <TodoListItem key={t._id} {...t} />)}
        </ul>
      </div>
      <div className={styles["footer"]}>
        <a className={styles["add-btn"]}>Add Task</a>
      </div>
    </div>
  );
};
