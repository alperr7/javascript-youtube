//break - continue 

//1-den 10 a kadar sayıları yazdıralım 8 e geldiğimizde döngüden çıkalım
// let sayac=1;
// while(sayac<=10){
//     console.log(sayac);
//     if(sayac==8){
//         break;
//     }
//     sayac++;
// }

// ? Continue döngüyü bir kereye mahsus kırar

//1 2 3 4 5 6 7 9 10  

let sayac=0;
while(sayac<=10){
    sayac++;
    if(sayac>10){
        break;
    }
    if(sayac==8){
        continue;
    }
     console.log(sayac);
}