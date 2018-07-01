let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}

console.log([1, 2, 3, 4, 5, 2].lastIndexOf(2));