import styles from "./todoList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { TodoListItem } from "./TodoListItem/TodoListItem";

import { useEffect, useState } from "react";
import { getAllTodos } from "../../services/todoService";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    getAllTodos()
      .then(setTodos)
      .catch((err)=>{console.log(err)});
  },[]);

  return (
    <div className={styles["container"]}>
      <div className={styles["header"]}>
        <FontAwesomeIcon icon={faList} />
        <span>Task Lists</span>
      </div>
      <div className={styles["main"]}>
        <ul>
          {todos.map(t=><TodoListItem key={t._id} {...t}/>)}
        </ul>
      </div>
      <div className={styles["footer"]}>
        <a className={styles["add-btn"]}>Add Task</a>
      </div>
    </div>
  );
};
