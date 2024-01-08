//KLAVYE EVENTLARI 


//keypress : harf ve sayılarda tetiklenen eventtır

//keydown : hepsinde çalışır 

//keyup : tuştan elini kaldırdığında çalışan eventtır


// document.addEventListener("keypress",run);
// document.addEventListener("keydown",run);
// document.addEventListener("keyup",run);

// function run(e){
//  console.log(e.key);
//console.log(e.keyCode); Unicode karakter karşılığını verir

//console.log(e.which); Unicode karakter karşılığını verir 


// }


//Kullanıcı F5 basmasını engelleyen program 

// document.addEventListener("keydown",run); 

// function run(e){
//     console.log(e.keyCode);

//     if(e.keyCode==116){
//         alert("Sayfa yenileme engellendi");
//     }
//      e.preventDefault();// bir olayın varsayılan davranışını iptal etmek için kullanılır
// }

const cardTitle = document.querySelectorAll(".card-title")[0];
const input = document.querySelector("#todoName");

// input.addEventListener("keypress",run);
input.addEventListener("keyup",run);
function run(e){
    cardTitle.textContent = e.target.value
    //console.log(e.target.value);
}
