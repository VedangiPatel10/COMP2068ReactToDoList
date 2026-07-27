This guided in-class exercise is part of our COMP 2068 React Fundamentals tutorial. It follows the same structure as the Assignment Tracker demo application, with all code contained in a single App.jsx file instead of separate component files. This allows you to practice the same React concepts used throughout the course.
Learning Objectives

During this exercise, you will practice:

Using useState to manage component state
Creating controlled form inputs
Rendering dynamic lists with .map()
Adding, completing, and deleting items stored in state

Getting Started
1. Clone the repository 2. Install the required dependencies 3. Start the development server 4. Open the URL displayed in the terminal in your browser.

Exercise Overview

Open src/App.jsx and complete the sections marked with TODO comments. Each step mirrors functionality from the Assignment Tracker project.

Step	Task	Assignment Tracker Equivalent
1	Create state for the input field and the todo list using useState	assignment / setAssignment and assignments / setAssignments
2	Implement the addTodo() function	addAssignment()
3	Display the list of todos using .map()	Assignment list rendered in App.jsx
4	Implement deleteTodo(id) and toggleComplete(id)	deleteAssignment(id) and toggleComplete(id)

If you need help or want to compare your work, refer to src/App.solution.jsx, which contains the completed solution.
