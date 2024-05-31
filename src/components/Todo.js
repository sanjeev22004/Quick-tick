import React from 'react';
import { BsTrashFill } from 'react-icons/bs';
import styles from './Todo.module.css'; // Import CSS Module styles

const Todo = ({ deleteTodo, checkTodo, todoItem, index }) => {
    const deleteTodoHandler = (id) => {
        deleteTodo(id);
    }

    const inputChangeHandler = (id) => {
        checkTodo(id);
    }

    return (
        <div className={styles.todo}>
            <li className={todoItem.checked ? styles.checked : ''}>
                <input
                    type='checkbox'
                    onChange={() => inputChangeHandler(todoItem.id)}
                    checked={todoItem.checked}
                />
                <span>{index + 1}. {todoItem.todo}</span>
                <span onClick={() => deleteTodoHandler(todoItem.id)}>
                    <BsTrashFill />
                </span>
            </li>
        </div>
    );
}

export default Todo;
