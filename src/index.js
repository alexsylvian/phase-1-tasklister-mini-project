const submitter = document.getElementById('create-task-form')
document.addEventListener("DOMContentLoaded", () => {
  submitter.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e);
    todoFunction(e.target['new-task-description'].value)
  })
});

function todoFunction(todo) {
  console.log(todo)
  const p = document.createElement('p')
  p.innerHTML = `${todo} `
  const btn = document.createElement('button')
  btn.innerHTML = 'x'
  btn.addEventListener('click', (e) => e.target.parentNode.remove())
  btn.addEventListener('click', (e) => e.target.remove())
  const tasks = document.getElementById('tasks')
  if (todo) {
    tasks.appendChild(p) 
    p.appendChild(btn)
  }
}
