import React from 'react';
import Todo from './Todo';
import styles from './Todolist.module.css'; // Import CSS Module styles

const Todolist = ({ todos, deleteTodo, checkTodo }) => {
    const allTodos = todos.map((item, index) => (
        <Todo key={index} todoItem={item} index={index} deleteTodo={deleteTodo} checkTodo={checkTodo} />
    ));

    return (
        <section>
            <ul className={styles.list}>
                {allTodos}
            </ul>
        </section>
    );
}

export default Todolist;
