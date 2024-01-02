//Math Sınıfı Metotları 

/* 
1-Floor
2-Ceil
3-Round

4-Max
5-Min

6-Random
7-Abs //Mutlak değer almak için kullanılır |-12|=12
8-Sqrt //Karekök almak için kullanılır
9-Pow
----> PI Sayisi

*/

let a = 3.19;

console.log(Math.floor(a)); //noktadan sonrasını uçurur
console.log(Math.ceil(a)); //her zaman bir üste yuvarlar
console.log(Math.round(a)); //en yakına yuvarlar
console.log(Math.max(1,2,3,4,5,50));
console.log(Math.min(1,2,3,4,5,50));
console.log(Math.abs(-2));
console.log(Math.sqrt(25));
console.log(Math.pow(2,3));
console.log(Math.PI);

console.log(Math.floor(Math.random()*100));
