//EVENT (OLAY)
//addEventListener()


const clearButton = document.querySelector("#todoClearButton");

clearButton.addEventListener("click",changeTitle); //() koyma


 function changeTitle(e){
   console.log(e.target);
   console.log(e.target.textContent);
   console.log(e.target.className);
}