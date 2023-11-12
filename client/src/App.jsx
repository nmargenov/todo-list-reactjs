import styles from './app.module.css';
import { AddTodoModal } from './components/AddTodoModal/AddTodoModal';
import { TodoList } from './components/TableList/TodoList';



function App() {

  return (
    <>
    <main className={styles['main']}>
      <TodoList/>
      {/* <AddTodoModal/> */}

    </main>
    </>
  )
}

export default App
