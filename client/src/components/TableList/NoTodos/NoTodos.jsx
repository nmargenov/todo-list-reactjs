import styles from './noTodos.module.css';

export const NoTodos = () =>{
    return(
        <div className={styles['main']}>
            <h1 className={styles['title']}>No todos added yet</h1>
        </div>
    );
}