//İNPUT EVENTLARI 

//focus : inputa girdiğinde çıktı verir
//blur : inputtan çıktığında çıktı verir 
//copy : inputtaki veriyi kopyaladığında çıktı verir
//paste : inputa bir veri yapıştırdığında çıktı verir
//cut : inputtaki veriyi kestiğinde çıktı verir
//select : inputtaki veriyi seçtiğinde çıktı verir

const todo = document.querySelector("#todoName");

// todo.addEventListener("focus",run);
// todo.addEventListener("blur",run);
// todo.addEventListener("copy",run);
// todo.addEventListener("paste",run);
// todo.addEventListener("cut",run);
todo.addEventListener("select", run);

function run(e){
    console.log(e.type);

}