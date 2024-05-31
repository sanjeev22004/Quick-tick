import React, { useEffect, useState } from 'react';
import Todolist from './Todolist';
import Form from './Form';
//import { v4 as uuid } from 'uuid';
import styles from './Todoapp.module.css'; // Import CSS Module styles

const Todoapp = () => {
    // Load todos from local storage or initialize empty array
    const arrayDummy = JSON.parse(window.localStorage.getItem('todos')) || [];

    const [todos, setTodos] = useState(arrayDummy);

    // Function to add todo
    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    }

    // Function to delete todo
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    // Function to toggle todo completion status
    const checkTodo = (id) => {
        setTodos(todos.map((item) => item.id === id ? { ...item, checked: !item.checked } : item));
    }

    // Store todos in local storage whenever todos state changes
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Todo List</h1>
            <Form addTodo={addTodo} todos={todos} />
            <Todolist todos={todos} deleteTodo={deleteTodo} checkTodo={checkTodo} />
        </div>
    );
}

export default Todoapp;
