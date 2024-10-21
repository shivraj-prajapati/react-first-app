
React Todo App (📝🚀)

Welcome to React Todo App! This simple application helps you manage your daily tasks with ease. You can add, mark as completed, and delete tasks using this React-based app.

Project URL: [react-todo-app](#)

📋 Features
- Add Todo: Easily add a new task to your list.
- Mark as Completed: Click on a task to mark it as completed.
- Delete Todo: Remove a task from your list when it's done.
- Duplicate Prevention: The app prevents adding duplicate tasks.

🛠️ Installation and Setup Instructions

Prerequisites
- Ensure that you have Node.js and npm installed on your machine.
  - Download Node.js: https://nodejs.org/
  - Check versions:
    node -v
    npm -v

Installation Steps
1. Clone the repository:
   git clone https://github.com/shivraj-prajapati/react-todo-app.git

2. Navigate to the project directory:
   cd react-todo-app

3. Install dependencies:
   npm install

4. Run the app:
   npm start

5. Open the app in your browser at http://localhost:3000/

🚀 How to Use

1. Add a Task:
   - Enter a task in the input field.
   - Click on the "Save Your Todo" button to add the task to your list.

2. Mark a Task as Complete:
   - Click on any task in the list to toggle between completed and uncompleted state.
   - Completed tasks will appear with a strikethrough.

3. Delete a Task:
   - Click on the "×" icon next to any task to remove it from the list.

🧑‍💻 Code Structure

- App Component:  
  This component manages the state of the todo list, handles adding new todos, and renders the list of todos.
  
- TodoListItems Component:  
  Each individual task is represented as a TodoListItems component. This component allows toggling the completed status and deleting the task.

📝 Sample Code Overview

Here's a quick look at the key parts of the code:

Adding a Task
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

🎨 Styling
- You can customize the CSS styles in the App.css file to modify how tasks are displayed, including the completed task styling (.completeTodo).

🤝 Contributing
Feel free to fork the repository, make improvements, and submit a pull request! Contributions are always welcome.

🐛 Known Issues
- Duplicate todo entries are not allowed (by design).
- App currently stores todos only in memory, which means that the list is cleared on page refresh.

📝 Future Improvements
- Add local storage support for persistent todos.
- Implement edit functionality for existing tasks.
- Add animations for task completion and deletion.

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

Feel free to explore, use, and contribute to this simple React Todo App! 😊
