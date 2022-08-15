import React from 'react';
import "./messageTodo.scss";


const Message = ({ setHiddenMessage, hiddenMessage, removeTodo }) => {

    return (
        <div className="Message" style={{display: (hiddenMessage.flex)? "flex" : "none"}}>
            <div className="screen">
                <div className="question">
                    <span>Are you sure you want to delete?</span>
                </div>
                <div className="buttons">
                    <button onClick={()=>{
                        setHiddenMessage(false)
                        removeTodo(hiddenMessage.id)
                    }}>Yes</button>
                    <button onClick={()=> {
                        setHiddenMessage(false)
                    }}>No</button>
                </div>
            </div>
        </div>
    );
};

export default Message;
