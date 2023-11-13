import styles from "./todoListItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { getAllTodos, getTodoById, markAsDone } from "../../../services/todoService";
import { useContext, useState } from "react";
import { TodoContext } from "../../../contexts/TodoContext";
import { SmallSpinner } from "./SmallSpinner/SmallSpinner";
import { ModalContext } from "../../../contexts/ModalContext";

export const TodoListItem = ({ _id, description, isCompleted }) => {
  const [isSetting, setIsSetting] = useState(false);
  const [isEditLoading, setIsEditLoading] = useState(false);

  const { setTodos } = useContext(TodoContext);
  const { onDeleteOpen, setEditTodo, setIsEditOpen } = useContext(ModalContext);

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

  function onEditClick(id){
    setIsEditLoading(true);
    getTodoById(id)
      .then((data)=>{
        setEditTodo(data);
        setIsEditLoading(false);
        setIsEditOpen(true);
      }).catch((err)=>{
        console.log(err);
      })
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
        {(!isSetting && !isEditLoading) && (
          <>
            {!isCompleted && (
              <FontAwesomeIcon
                onClick={onMarkAsDoneClick}
                className={styles["check-btn"]}
                icon={faCheck}
              />
            )}
            {!isCompleted && (
              <FontAwesomeIcon onClick={()=>onEditClick(_id)} className={styles["edit-btn"]} icon={faPen} />
            )}
            <FontAwesomeIcon onClick={()=>onDeleteOpen(_id)} className={styles["delete-btn"]} icon={faTrash} />
          </>
        )}
        {(isSetting || isEditLoading ) && <SmallSpinner/>}
      </div>
    </li>
  );
};
