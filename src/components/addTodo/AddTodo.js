import React, {useState} from 'react';
import {GrFormClose} from "react-icons/gr";
import './addTodo.scss'

const AddTodo = ({addItem, todos, handleFilter, newTodos}) => {

    const [value, setValue] = useState("");
    const [hiddenError, setHiddenError] = useState(true);
    const [hiddenRemoveValue, setHiddenRemoveValue] = useState(false);
    const [flag, setFlag] = useState(false);


    const submitHandler = (e) => {
        e.preventDefault();
        if (value.length > 54) return;
        addItem(value);
        setValue("");
        setHiddenRemoveValue(false)
    }

    const removeValue = () => {
        setValue("");
        setHiddenRemoveValue(false)
        setHiddenError(true)
    }

    const changeHandler = (e) => {
      setValue(e.target.value);
      setHiddenRemoveValue(e.target.value.length > 0);
      if (e.target.value.length <= 54) {
          setHiddenError(true)
      }else {
          setHiddenError(false)
      }
    }


    return (
        <div className="header">
            <div className="hideCompleted"  style={{display: (todos.length > 0 || newTodos.length > 0) ? "flex" : "none" }}>
                <input type="checkbox" onClick={()=> {
                    handleFilter(!flag);
                    setFlag(!flag);
                }}/>
                <h4 className="hideCompletedText">Hide completed</h4>
            </div>
            <form action="">
                <label htmlFor="username">Task</label>
                <div className="addContainer">
                    <input value={value} onClick={() => setHiddenRemoveValue(true)} autoComplete="off"  onChange={ (event) => changeHandler(event)} className="inputItem" type="text" id="username" placeholder="Write here"/>
                    <GrFormClose className="close" onClick={() => removeValue()} style={{display: (hiddenRemoveValue)? "flex":"none"}}/>
                    <input value="Add" className="addItem" type="submit" onClick={event => submitHandler(event)}/>
                </div>
                <span hidden={hiddenError} className="inputError">Task content can contain max 54 characters.</span>
            </form>
        </div>
    );
};

export default AddTodo;
