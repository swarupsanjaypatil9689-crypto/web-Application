document.addEventListener("DOMContentLoaded", () => {
  // 1. Live Clock Functionality
  function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();
    clockElement.textContent = now.toLocaleTimeString();
  }
  setInterval(updateClock, 1000);
  updateClock();

  // 2. Task Manager Functionality
  const taskInput = document.getElementById("taskInput");
  const addBtn = document.getElementById("addBtn");
  const taskList = document.getElementById("taskList");

  addBtn.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
  });

  function addTask() {
    const text = taskInput.value.trim();
    if (text === "") return;

    const li = document.createElement("li");
    li.className = "task-item";
    
    const span = document.createElement("span");
    span.textContent = text;
    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => li.remove();

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
  }
});