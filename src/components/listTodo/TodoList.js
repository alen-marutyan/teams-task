import React from 'react';
import TodoItem from "../itemTodo/TodoItem";
import './listTodo.scss'

const TodoList = ({todos, removeTodo, doneItem, newTodos, setRemoveMessage, setHiddenMessage}) => {
    return (
        <div className="footer">
            {
                ( todos.length === 0 && newTodos.length === 0 )
                    ?
                    <div className="notItem">
                        <h3>your life is a blank page. You write on it.</h3>
                        <h2>So start by adding your tasks here.</h2>
                    </div>
                    : todos.map( (el, index) => (
                        <TodoItem id={el.id} value={el.value} completed={el.completed} setHiddenMessage={setHiddenMessage} setRemoveMessage={setRemoveMessage} removeTodo={removeTodo} key={index} doneItem={doneItem} />
                    ))
            }
        </div>
    );
};

export default TodoList;
