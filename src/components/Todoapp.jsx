import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function TodoApp() {
  const [todoInput, SetTodoInput] = useState("");
  const [todos, SetTodo] = useState([]);

  const handleChange = (event) => {
    SetTodoInput(event.target.value);
    
  };

  const addTodo = () => {
    if (todoInput.trim() !== "") {
      const newTask = { value: todoInput, key:uuidv4(), completed:false };
      SetTodo([...todos, newTask]);
      SetTodoInput("")
      console.log(todos)
    }
  };

  const handleDel = (key)=>{
    SetTodo(todos.filter((todo)=> todo.key !== key))
  }

  const handleToggle = (key) => {
    SetTodo((prevTodos) =>
      prevTodos.map((todo) =>
        todo.key === key ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  
  return (
    <div className="TodoApp-container">
      <h2>Todo App</h2>
      <div className="input-wrapper">
        <input
          onChange={handleChange}
          type="text"
          name="Todo-input"
          id="Todo-input"
        />
        <button onClick={addTodo}>ADD</button>
      </div>
      <div className="todo-lists">
        {todos.map((todo) => {
          return (
            <div className="each-todo">
              <input type="checkbox" checked={todo.completed} onChange={() => handleToggle(todo.key)}/>
              <div className="each-todo-without-checkbox">
                <li>{todo.value}</li>
                <button onClick={()=>handleDel(todo.key)}>X</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TodoApp;
