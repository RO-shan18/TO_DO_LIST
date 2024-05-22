
function addlist(){
let list = document.querySelector(".task>ul");
let task = document.getElementById("todo");
let button = document.querySelector(".btn");


button.addEventListener("click",()=>{
    let additem = task.value;
    list.innerHTML += `
    <li><a class="anchor">${additem}</a><img src="delete.svg" alt="" srcset="" class="image"></li>`;
    task.value = "";
  })


list.addEventListener("click",(event)=>{
    if(event.target.classList.contains("anchor")){
        event.target.style.textDecoration = "line-through";
    }
})

list.addEventListener("click", (event)=>{
    if(event.target.classList.contains("image")){
        event.target.parentElement.remove();
    }
})
}

addlist();