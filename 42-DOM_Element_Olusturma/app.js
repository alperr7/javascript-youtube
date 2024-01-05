//Dinamik Olarak Element Oluşturmak

const cardBody = document.querySelectorAll(".card-body")[1];
const todoList = document.querySelector(".list-group");

console.log(cardBody);

const link = document.createElement("a");
link.id="goBlogWebSite";
link.className= "btn btn-dark btn-sm mt-3";
link.href="http://enesbayram.net";
link.target = "_blank";
link.innerHTML = "Kişisel Websiteme Git";

cardBody.appendChild(link);  //sona ilave et demek


const todo = document.createElement("li");
const todoLink = document.createElement("a");
const todoi = document.createElement("i");


todo.className="list-group-item d-flex justify-content-between";
todo.innerHTML = "Todo 5";
todoLink.href="#";
todoLink.className = "delete-item";

todoi.className = "fa fa-remove"; 
todoLink.appendChild(todoi);
todo.appendChild(todoLink);

todoList.appendChild(todo);

console.log(link);