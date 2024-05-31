import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import styles from './Form.module.css';

const Form = (props) => {
    const [input, setInput] = useState('');
    const [isValid, setIsValid] = useState(true);

    const inputChangeHandler = (e) => {
        setInput(e.target.value);
        setIsValid(true);
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        if (input.trim().length === 0) {
            setIsValid(false);
            return;
        }
        const newTodo = {
            id: uuid(),
            todo: input,
            checked: false
        }
        props.addTodo(newTodo);
        setInput('');
    }

    return (
        <div className={styles.formContainer}>
            <form onSubmit={formSubmitHandler}>
                <input
                    className={!isValid ? styles.invalid : ''}
                    onChange={inputChangeHandler}
                    type="text"
                    placeholder="Enter task"
                    value={input}
                />
                <button type="submit">ENTER</button>
            </form>
        </div>
    );
}

export default Form;
