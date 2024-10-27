
🚀 React Todo App - Manage Your Tasks Effortlessly!

Welcome to React Todo App, a simple yet powerful tool to streamline your task management. Add, mark as completed, and delete tasks—all in a slick React interface.

---

🔥 Features
- Add Todos: Add tasks with a single click.
- Complete Todos: Toggle completion by clicking on tasks.
- Delete Todos: Remove tasks from your list with ease.
- Duplicate Prevention: No more duplicate tasks in your list.

---

💻 Getting Started

Prerequisites
Ensure that Node.js and npm are installed:
- Download Node.js: https://nodejs.org/
- Verify installation:
  node -v
  npm -v

Installation
1. Clone the repo:
   git clone https://github.com/shivraj-prajapati/react-first-app.git
2. Navigate to the project folder:
   cd react-todo-app
3. Install dependencies:
   npm install
4. Launch the app:
   npm start
5. Open the app in your browser:
   http://localhost:3000/

---

⚡️ How to Use
1. Add Tasks: Enter a task and hit "Save Your Todo."
2. Mark as Completed: Click on tasks to toggle between completed and uncompleted (completed tasks have a strikethrough).
3. Delete Tasks: Click the "×" next to a task to remove it.

---

🧑‍💻 Code Overview
- App Component: Manages the todo list state and renders tasks.
- TodoListItems Component: Represents individual tasks, handles completion toggle and deletion.

Adding Tasks
let saveTodoList = (event) => {
  let name = event.target.name.value;
  if (!todoList.includes(name)) {
    let finaltodoList = [...todoList, name];
    settodoList(finaltodoList);
  } else {
    alert("Todo already exists");
  }
  event.preventDefault();

Rendering the Todo List
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

---

🎨 Styling
- Customize styles in App.css, including the .completeTodo class for completed tasks.

---

💡 Future Enhancements
- Local storage for persisting tasks.
- Task editing functionality.
- Smooth animations for task actions.

---

🤝 Contributing
Feel free to fork, make changes, and submit a pull request. Contributions are always welcome!

🐛 Known Issues
- Todos are not stored persistently (will be cleared on refresh).

---

Explore, customize, and enjoy managing your tasks with React Todo App! 😊
