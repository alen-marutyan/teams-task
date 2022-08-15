import { useState} from "react";
import AddTodo from "./components/addTodo/AddTodo";
import TodoList from "./components/listTodo/TodoList";
import Message from "./components/messageTodo/Message";
import uuid from 'react-uuid'
import "./App.scss"

function App() {

  const [todos, setTodos] = useState([]);
  const [newTodos, setNewTodos] = useState([]);
  const [hiddenMessage, setHiddenMessage] = useState({});

    const removeTodo = (id) => {
        const newTodos = [...todos].filter(todo=> todo.id !== id);
        setTodos(newTodos);
        setNewTodos(newTodos)
    }

    const doneItem = (id) => {
        let mapped = todos.map(task => {
            return task.id === id ? { ...task, completed: !task.completed } : { ...task};
        });
        setTodos(mapped);
        setNewTodos(mapped);
    }


    const handleFilter = (flag) => {
        if (flag) {
            const filteredArray = todos.filter((el) => {
                console.log(el);
                return el.completed === false
            });
            setTodos(filteredArray)
        }else {
            setTodos(newTodos);
        }
    }


    const addItem = (userInput ) => {
        if(!userInput) return;
        let copy = [...todos];
        copy = [{ id: uuid(), value: userInput, completed: false },...copy ];
        setTodos(copy);
        setNewTodos(copy);
    }


  return (
      <div className="Todo">
          <div className="screenTodo">
              <AddTodo newTodos={newTodos} addItem={addItem} todos={todos} handleFilter={handleFilter}/>
              <TodoList setHiddenMessage={setHiddenMessage} newTodos={newTodos} todos={todos} removeTodo={removeTodo} doneItem={doneItem}  />
          </div>
          <Message removeTodo={removeTodo}  hiddenMessage={hiddenMessage} setHiddenMessage={setHiddenMessage}/>
      </div>
  );
}

export default App;
