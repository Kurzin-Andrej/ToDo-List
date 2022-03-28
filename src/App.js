import React from "react";
import {useState} from "react";


function App(){ 
  const [todos, setTodos] = useState(() => {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    return JSON.parse(savedTodos);
  } else {
    return [];
  }
});
const [todo, setTodo] = useState("");

function handleInputChange(e) {
  setTodo(e.target.value);
}

function handleFormSubmit(e) {
  e.preventDefault();
  if (todo === "") { return }
  const new_todos = [...todos, todo];
  setTodos(new_todos);
  localStorage.setItem("todos", JSON.stringify(new_todos));
  setTodo("");
}

function handleDeleteClick(index) {
  let remove_todos = todos;
  remove_todos.splice(index, 1); 
  setTodos(remove_todos.slice(0));
  localStorage.setItem("todos", JSON.stringify(remove_todos));
}

return (
  <div>
    <div className="head">
      <h1>Список задач</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Введите новую задачу"
          value={todo}
          onChange={handleInputChange}
        />
        <button className="addBtn" onClick={handleFormSubmit}>Добавить</button>
      </form>
    </div>
    {todos.map((todo, index) => 
      <div className="list" key={index}>
        {todo}
        <button className="far fa-trash-alt" onClick={() => handleDeleteClick(index)}></button>
      </div>
    )}
    
  </div>
);
}



export default App




