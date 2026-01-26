import React, { useState } from "react";
import "./TodoList.css";
import NewTodoForm from "./NewTodoForm";
import TodoCard from "./TodoCard";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [headingInput, setHeadingInput] = useState("");
  const [listInputs, setListInputs] = useState({});

  const handleAddTodo = () => {
    if (headingInput.trim() !== "") {
      setTodos([...todos, { heading: headingInput, lists: [] }]);
      setHeadingInput("");
    }
  };

  // Function to handle adding a new list item to a specific todo heading
  const handleAddList = (index) => {
    // Check if the input for the given index is not empty of just whitespace
    if (listInputs[index] && listInputs[index].trim() !== "") {
      const newTodos = [...todos]; // Create a copy of the current todos array
      newTodos[index].lists.push(listInputs[index]); // Add the new list item to the corresponding heading's list
      setTodos(newTodos); // Update the todos state with the new list item
      setListInputs({ ...listInputs, [index]: "" }); // Clear the input field for that index
    }
  };

  // Function to update list input value for a specific heading index
  const handleListInputChange = (index, value) => {
    setListInputs({ ...listInputs, [index]: value }); // Update the listInputs state for the corresponding index
  };

  // Function to delete todo item
  const handleDeleteTodo = (index) => {
    // Create a copy of the todos array
    const newTodos = [...todos];
    // Delete the todo at the given index
    newTodos.splice(index, 1);
    // Update the state with the new array
    setTodos(newTodos);
  }

  return (
    <>
      {/* Top part */}
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <NewTodoForm headingInput={headingInput} setHeadingInput={setHeadingInput} handleAddTodo={handleAddTodo} handleDeleteTodo={handleDeleteTodo}/>
      </div>

      {/* Botton part */}
      <div className="todo_main">
        {/* Iterate over todo array and display each todo */}
        {todos.map((todo, index) => (
          <TodoCard key={index} index={index} todo={todo} handleListInputChange={handleListInputChange} handleAddList={handleAddList} listInputs={listInputs} />
        ))}
      </div>
    </>
  );
};

export default TodoList;
