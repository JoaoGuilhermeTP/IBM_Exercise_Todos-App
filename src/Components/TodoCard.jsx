import React from "react";

export default function TodoCard({index, todo, handleListInputChange, handleAddList, handleDeleteTodo, listInputs}) {
  return (
    <div index={index} className="todo-card">
      <div className="heading_todo">
        <h3>{todo.heading}</h3>
        <button className="delete-button-heading" onClick={() => handleDeleteTodo(index)}>
          Delete Heading
        </button>
      </div>
      <ul>
        {/* Iterate over each list item inside the current todo */}
        {todo.lists.map((list, listindex) => (
          <li key={listindex} className="todo_inside_list">
            {/* Display the text content of the list item */}
            <p>{list}</p>
          </li>
        ))}
      </ul>
      <div className="add_list">
        {/* Input field for adding a new item under a specific heading */}
        <input
          type="text"
          className="list-input"
          placeholder="Add List"
          value={listInputs[index] || ""}
          onChange={(e) => handleListInputChange(index, e.target.value)}
        />
        <button
          className="add-list-button"
          onClick={() => handleAddList(index)}
        >
          Add List
        </button>
      </div>
    </div>
  );
}
