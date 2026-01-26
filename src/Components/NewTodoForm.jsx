import React from "react";

export default function NewTodoForm({headingInput, setHeadingInput, handleAddTodo}) {
  return (
    <div className="input-container">
      <input
        type="text"
        className="heading-input"
        placeholder="Enter heading"
        value={headingInput}
        onChange={(e) => {
          setHeadingInput(e.target.value);
        }}
      />
      {/* Button to add the entered heading to the todo list */}
      <button className="add-list-button" onClick={handleAddTodo}>
        Add Heading
      </button>
    </div>
  );
}
