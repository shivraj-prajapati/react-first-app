import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [todoList, settodoList] = useState([]);

  let saveTodoList = (event) => {
    let name = event.target.name.value;
    if (!todoList.includes(name)) {
      let finaltodoList = [...todoList, name];
      settodoList(finaltodoList);
    } else {
      alert("Todo already exists");
    }
    event.preventDefault();
  };

  let list = todoList.map((value, index) => {
    return (
      <TodoListItems
        key={index}
        value={value}
        indexNumber={index}
        todoList={todoList}
        settodoList={settodoList}
      />
    );
  });

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={saveTodoList}>
        <input type="text" name="name" id="" />
        <button>Save Your Todo</button>
      </form>
      <div className="outerDiv">
        <ul>{list}</ul>
      </div>
    </div>
  );
}

export default App;

function TodoListItems({ value, indexNumber, todoList, settodoList }) {
  let [status, setstatus] = useState(false);
  const deleteRow = () => {
    let finaltodoList = todoList.filter((item, index) => {
      return index !== indexNumber;
    });
    settodoList(finaltodoList);
  };
  let checkStatus = () => {
    setstatus(!status);
  };

  return (
    <li className={status ? "completeTodo" : ""} onClick={checkStatus}>
      {indexNumber + 1} {value} <span onClick={deleteRow}>&times;</span>
    </li>
  );
}
