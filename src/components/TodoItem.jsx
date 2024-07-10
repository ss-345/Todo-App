import TodoContent from "./TodoContent";
import style from "./TodoItem.module.css";
import AppTodo from "./AppTodo";
import { useState } from "react";
import WelcomeQuote from "./WelcomeQuote";
function TodoItem() {
  const inittodoList = [];

  let [todoList, setTodoList] = useState(inittodoList);

  let handleNewItem = (NewItem, NewDate) => {
    // console.log(`${NewItem}+${NewDate}`);
    if (NewItem !== "" && NewDate !== "") {
      // Check if the task already exists
      const taskExists = todoList.some(
        (item) => item.task === NewItem && item.date === NewDate
      );

      if (!taskExists) {
        const newTodoList = [
          ...todoList,
          {
            task: NewItem,
            date: NewDate,
          },
        ];
        setTodoList(newTodoList);
      } else {
        alert("Task already exists!"); // Provide feedback if task is repeated
      }
    }
  };

  let handleDeleteItem = (taskToDelete, taskDate) => {
    const newTodoList = todoList.filter(
      (item) => item.task !== taskToDelete || item.date !== taskDate
    );
    setTodoList(newTodoList);
  };

  return (
    <div className={`${style["item-container"]}`}>
      <AppTodo handleNewItem={handleNewItem}></AppTodo>
      {todoList.length === 0 && <WelcomeQuote></WelcomeQuote>}
      {todoList.map((item) => (
        <TodoContent
          key={item.task}
          task={item.task}
          date={item.date}
          handleDeleteItem={() => handleDeleteItem(item.task, item.date)}
        ></TodoContent>
      ))}
    </div>
  );
}

export default TodoItem;
