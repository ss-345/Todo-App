import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";
import "./App.css";
import TodoContent from "./components/TodoContent";
import TodoItem from "./components/TodoItem";
function App() {
  
  return (
    <center className="tod-container">
      <AppName></AppName>
      

      <TodoItem ></TodoItem>
      
    </center>
  );
}

export default App;
