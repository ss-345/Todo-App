import { useState } from "react";

function AppTodo({ handleNewItem }) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleAddItem = () => {
    handleNewItem(task, date);
    setTask("");
    setDate("");
  };

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Your Task Here..."
            onChange={handleTaskChange}
            value={task}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange} value={date}/>
        </div>
        <div className="col-2">
          <button
            onClick={handleAddItem}
            type="button"
            className="btn btn-success kg-btn"
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppTodo;
