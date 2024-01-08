//MOUSE EVENTLARI 

//DOMContentLoaded
//load
//click 
//dbclick 
//mouseover 
//mouseout 
//mouseenter
//mouseleave


// document.addEventListener("DOMContentLoaded",run); //sayfa yüklendiğinde şu metot yüklensin diyoruz
// window.addEventListener('load',run); bir web sayfasının yüklenmesi tamamlandığında şu metot yüklensin diyor
//function run(){
//     alert("Sayfa Yüklendi");
// }

// const cardTitle =  document.querySelectorAll(".card-title")[1];

// cardTitle.addEventListener("dbclick",run);

// function run(e){
//     console.log(e.type)
// }


const cardBody = document.querySelectorAll(".card-body")[1];
const cardTitle =  document.querySelectorAll(".card-title")[1];

// cardBody.addEventListener("mouseover",run);
// cardBody.addEventListener("mouseout",run);

// cardBody.addEventListener("mouseenter",run);
cardBody.addEventListener("mouseleave",run);


function run(e){
    console.log(e.type);
}