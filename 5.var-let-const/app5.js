// Var - Let - Const


// Değişken Nedir ? 

/* 

var/let/const degiskenIsmi = degiskenDegeri;

let sayi = 10;

*/


// var : function scope () -- ram bellekte çok fazla yer kaplar
// let/const : block scope özelliğine sahiptir


// function selamVer(){
//     var selam = "Herkese selam Ben Mehmet Hocanız"; //function scope
//     if(true){
//         const b = 10;
//         console.log(b);
//     }
    
//     console.log(selam);
// }

// selamVer();

// var a = 5;
// var a = 10;
// console.log(a);

// var a = 5;
// var a = 10;
// console.log(a);

// if(true){
//     let a = 5;
//     let a=10;
//     console.log(a);
// }


/* LET & CONST  arasındaki fark ?  */

// const {constant} : sabit , değişmez

// const a = 10;
// a=15;
// console.log(a);

// let b = 5;
// b=7;
// b=12;
// console.log(b);

const user = {
    username : "alper",
    password: "123",
}
user.username="alperkandemir"


console.log(user);