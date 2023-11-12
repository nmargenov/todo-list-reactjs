import styles from './app.module.css';
import { TodoList } from './components/TableList/TodoList';


function App() {

  return (
    <>
    <main className={styles['main']}>
      <TodoList/>
    </main>
    </>
  )
}

export default App
