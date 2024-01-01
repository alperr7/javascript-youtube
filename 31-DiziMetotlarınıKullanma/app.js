//Dizinin metotları 

/* 
push : dizinin sonuna eleman ekler , ayrıca dizinin uzunluğunu döner
unshift:dizinin başına eleman ekler , eleman sayısını geriye döner 

pop : dizinin sonundan eleman siler , eleman sayısını döner 
shift : dizinin başından eleman siler , eleman sayısını döner 

splice (index,index) : eleman eklemek ve silmek için kullanılır 

toString : diziyi stringe çevirebiliriz 
join : diziyi stringe çevirir . Farkı ise araya eleman ekleyebiliriz 

concat : dizileri birleştirmek için kullanılır 
slice(dilimlemek) : diziyi istenilen yerden bölüp yeni bir dizi oluşturur 
lenght : dizinin uzunluğunu verir
reverse : dizinin elemanlarını ters çevirmek 
split(bölmek) : belirli bir ifadeye göre bölüp diziye çevirmek 
indexOf : elemanın index numarasını verir 
includes: verilen elemanı içeriyor mu ona bakar 


*/

let arabalar = ["bmw" , "toyota","renault","mercedes","porsche"];
// let arabalar2 = ["hundai","tofaş","volkswagen"]
//PUSH METOT
// arabalar.push("honda");

//UNSHIFT METOT
// arabalar.unshift("hundai");

//POP METOT 
// arabalar.pop();
// let silinenEleman = arabalar.pop();
// console.log(silinenEleman);

//SHIFT METOT 
// let silinenEleman= arabalar.shift();
// console.log(silinenEleman);

//SPLİCE METOT
//  console.log(arabalar);
// arabalar.splice(2,0,"hundai");
// arabalar.splice(1,2);
// arabalar.splice(2,2,"hundai");

//TOSTRİNG METOT
// let stringArabalar= arabalar.toString();
// console.log(typeof stringArabalar);

//JOİN METOT
// let stringjoinArabalar = arabalar.join("-");
// console.log(stringjoinArabalar);

//CONCAT METOT 
// let arabalar3 = arabalar1.concat(arabalar2);
// console.log(arabalar3);


//SLİCE METOT 
// let ayriDizi=arabalar.slice(2,4);
// console.log(ayriDizi);

//LENGHT ÖZELLİK 
// console.log(arabalar.length);

//REVERSE METOT
// console.log(arabalar);
// let tersArabalar = arabalar.reverse();
// console.log(tersArabalar);

//SPLİT METOT 
// let isimler = "Enes,Ali,Veli";
// let isimlerYeni=isimler.split(",");
// console.log(isimlerYeni);

//İNDEXOF METOT
// let index = arabalar.indexOf("bmw");
// console.log(index);

//INCLUDES METOT 
let varMi = arabalar.includes("mercedes");
console.log(varMi);