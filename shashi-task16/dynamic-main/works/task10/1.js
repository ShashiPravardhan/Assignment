let taskStack = [];
function addTask() {
 const taskName = document.getElementById('taskName').value;


 taskStack.push(taskName);
 updateProcessLine();
 document.getElementById('taskName').value = '';
}
function undoTask() {
 if (taskStack.length === 0) {
 alert('No tasks to undo!');
 return;
 }

 taskStack.pop();
 updateProcessLine();
}
function updateProcessLine() {
 document.getElementById('process-list').textContent = taskStack.join(', ');
}