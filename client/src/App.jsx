import styles from './app.module.css';
import { AddTodoModal } from './components/AddTodoModal/AddTodoModal';
import { EditTodoModal } from './components/EditTodoModal/EditTodoModal';
import { TodoList } from './components/TableList/TodoList';



function App() {

  return (
    <>
    <main className={styles['main']}>
      <TodoList/>
      {/* <AddTodoModal/> */}
      {/* <EditTodoModal/> */}

    </main>
    </>
  )
}

export default App
