//Selectors (Seçiciler) , Style Özellikleri

//classname , id , tag name

//getElementById : id ye göre elementi yakalar
//getElementByClassName : class ismine göre yakalar
//getElementByTagName : etiket ismine göre yakalar.

let value; 

const button = document.getElementById("todoAddButton");





console.log(button);
// console.log(button.id);
// console.log(button.getAttribute("id"));

// console.log(button.className);
// console.log(button.getAttribute("class"));

// const classListesi = button.classList[3];
// const classListesi = button.classList[2];


// const classListesi = button.classList;

// classListesi.forEach(function(className){
//     console.log(className);
// })
// console.log(classListesi);

// let buttonText = button.textContent;
// let buttonText2 = button.innerHTML;

// button.textContent = "<b> Todo Ekleyin</b>";
// button.innerHTML = "<b> Todo Ekleyin</b>";

// console.log(buttonText);
// console.log(buttonText2);

// const todoList = Array.from(document.getElementsByClassName("list-group-item"));

// todoList.forEach(function(todo){
//     console.log(todo.className);
// })
// console.log(todoList);

// const forms = Array.from(document.getElementsByTagName("form"));

// forms.forEach(function (form){
//     console.log(form);
// })

// console.log(forms[0].id);


// const todoList = document.getElementsByTagName("li");
// console.log(todoList);



//getElementById - getEelemetnByClassName - getElementByTagName

//querySelector - querySelectorAll


// const clearButton = document.querySelector("#todoClearButton"); id lerde # 
// console.log(clearButton);

// console.log(document.getElementById("todoClearButton"));


// const todoList = document.querySelector(".list-group"); classlarda . 
// console.log(todoList);


// const todoList = document.querySelector(".list-group-item");
// console.log(todoList); 
//4 tane var normalde ama 1 tane geldi bunun için querySelectorAll kullanılmalıdır


// const todoList = document.querySelectorAll(".list-group-item").length-1;
// console.log(todoList);

//odd ve even
const todoList = Array.from(document.querySelectorAll("li:nth-child(even)"));

todoList.forEach(function(todo){
    todo.style.backgroundColor = "lightgrey";
})
// even çiftleri seçer odd ise tekleri
console.log(todoList);