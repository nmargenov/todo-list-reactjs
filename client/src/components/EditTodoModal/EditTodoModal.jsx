import styles from "../shared/addEditTodoModal.module.css";

export const EditTodoModal = () => {
  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal"]}>
        <header>
          <h2>Edit Todo</h2>
        </header>
        <main>
          <form>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Edit todo here..."
            />
          </form>
        </main>
        <footer>
          <a className={styles["cancel-btn"]}>Cancel</a>
          <a className={styles["save-btn"]}>Save</a>
        </footer>
      </div>
    </div>
  );
};
