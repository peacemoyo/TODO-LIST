const taskBar = document.querySelector("ul");
const button = document.querySelector("#btn");

taskBar.addEventListener("click", (event)=>{
if(event.target.tagName ="LI"){
    event.target.remove();
}
}); 

button.addEventListener("click", ()=>{
const newLi = document.createElement("li");
newLi.textContent ="New Task"
taskBar.appendChild(newLi);
});



