let arrayOfTodos = [
  {
  "userId": 14,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
{
  "userId": 20,
  "id": 2,
  "title": "delectus aut autem",
  "completed": false
}]

console.log(arrayOfTodos[0].userId)
console.log(arrayOfTodos[1].userId)

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then( (response) => response.json())
  .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
  console.log(arrayOfTodos)
}

const populateTodos = () => {
  const setToDo = document.getElementById("todo-list")
  for (let index = 0; index < arrayOfTodos.length; index++) {    
  const listItem = document.createElement("li")
  const setText = document.createTextNode(arrayOfTodos[index].title);
  console.log(arrayOfTodos[index].title)
  listItem.appendChild(setText)
  setToDo.appendChild(listItem)
  }
}

const arrayOfTodos1 = [
  {
  "userId": 14,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
{
  "userId": 20,
  "id": 2,
  "title": "delectus aut autem",
  "completed": false
}
]

console.log(arrayOfTodos[0].userId) // => 14
console.log(arrayOfTodos[1].userId) // => 20