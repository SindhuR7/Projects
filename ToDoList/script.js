let todos = JSON.parse(localStorage.getItem("todos")) || [];
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const ul = document.getElementById("taskList");
const clearBtn = document.getElementById("clearCompleted");
const exportBtn = document.getElementById("exportJson");

const showAllBtn = document.getElementById("showAll");
const showActiveBtn = document.getElementById("showActive");
const showCompletedBtn = document.getElementById("showCompleted");

let currentFilter = "all";

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
  ul.innerHTML = "";
  todos.forEach((todo, index) => {
    if (currentFilter === "active" && todo.completed) return;
    if (currentFilter === "completed" && !todo.completed) return;

    const li = document.createElement("li");
    if (todo.completed) li.classList.add("completed");

    // Editable text
    const span = document.createElement("span");
    span.textContent = todo.text;
    span.contentEditable = true;
    span.addEventListener("input", () => {
      todos[index].text = span.textContent;
      saveTodos();
    });

    // Toggle complete
    li.addEventListener("click", (e) => {
      if (e.target.tagName !== "BUTTON") {
        li.classList.toggle("completed");
        todos[index].completed = !todos[index].completed;
        saveTodos();
      }
    });

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.className = "deleteBtn";
    delBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      todos.splice(index, 1);
      saveTodos();
      renderTodos();
    });

    li.appendChild(span);
    li.appendChild(delBtn);

    // Drag & drop
    li.draggable = true;
    li.addEventListener("dragstart", () => li.classList.add("dragging"));
    li.addEventListener("dragend", () => {
      li.classList.remove("dragging");
      const newOrder = [...ul.children].map(
        (child) => child.querySelector("span").textContent
      );
      todos = newOrder.map((t) => {
        const old = todos.find((todo) => todo.text === t);
        return old || { text: t, completed: false };
      });
      saveTodos();
      renderTodos();
    });

    ul.appendChild(li);
  });
}

function addTask() {
  const text = input.value.trim();
  if (!text) return;
  todos.push({ text, completed: false });
  saveTodos();
  input.value = "";
  renderTodos();
}

addBtn.addEventListener("click", addTask);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

// Filters
showAllBtn.addEventListener("click", () => {
  currentFilter = "all";
  renderTodos();
});
showActiveBtn.addEventListener("click", () => {
  currentFilter = "active";
  renderTodos();
});
showCompletedBtn.addEventListener("click", () => {
  currentFilter = "completed";
  renderTodos();
});

// Clear completed
clearBtn.addEventListener("click", () => {
  todos = todos.filter((t) => !t.completed);
  saveTodos();
  renderTodos();
});

// Export JSON
exportBtn.addEventListener("click", () => {
  const dataStr =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(todos, null, 2));
  const a = document.createElement("a");
  a.href = dataStr;
  a.download = "todos.json";
  a.click();
});

// Initial render
renderTodos();
