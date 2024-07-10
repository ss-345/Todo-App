function TodoContent({task,date,handleDeleteItem}) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{task}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-btn" onClick={handleDeleteItem}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoContent;
