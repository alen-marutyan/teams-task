import React from 'react';
import {GrFormClose} from "react-icons/gr";
import './itemTodo.scss'


const TodoItem = ({ id, value, completed, doneItem, setHiddenMessage}) => {

    return (
        <div className="Item">
            <div className="itemDiv">
                <input checked={!!(completed)} type="checkbox" onClick={() => doneItem(id)} />
                <p className={(completed)? "itemValue completed" : "itemValue"} >{value}</p>
            </div>
            <GrFormClose className="removeItem" onClick={()=> {
                setHiddenMessage({id, flex: true})
            }}/>
        </div>
    );
};

export default TodoItem;
