let taskTitle = document.querySelector ("#tsk");
let form = document.querySelector("form");
let todos = document.querySelector(".todos");

//   const del = () => {
//   let delIcon = document.querySelectorAll(".del")
//   delIcon.forEach((item) => {
//   item.onClick = () =>{
//   item.parentElement.remove()
//        }
//    })
//  }
//ADD task
const add = () => {
    if(taskTitle.value.length <  5 || taskTitle.value == ' ') {
        alert("task cannot be empty")
    }
    let li = document.createElement("li")
    let span = document.createElement('span')
    span.textContent = "x"
    span.className = "del"
    let task = document.createTextNode(taskTitle.value)
    li.appendChild(task)   
    li.appendChild(span)
    todos.appendChild(li)
     taskTitle.value = ''
     //del()
}

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    console.log("hshshsh")
  add()

})


 todos.addEventListener('click', (e) =>{
    if(e.target.className == "del"){
         e.target.parentElement.remove();
    }
 })