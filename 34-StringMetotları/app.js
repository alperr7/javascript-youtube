//String Sınıfının Metotları 

let kurs = "Modern Web Geliştirme Kursu";
let tarih = "2024"

//charAt()
//concat()
//indexOf()
//lastindexOf()
//toUpperCase()
//toLowerCase()
//trim()
//slice()
//substring()
//replace()
//split()
//valueOf()
//startsWith()
//endsWith()

console.log(kurs.charAt(5));
console.log(kurs.concat(" ",tarih ," ALPER"));
console.log(kurs.indexOf('W'));
console.log(kurs.lastIndexOf("Kursu"));
console.log(kurs.toUpperCase());
console.log(kurs.toLowerCase());
console.log(kurs.trim()); //boşlukları temizlemek için
console.log(kurs.slice(7,10));
console.log(kurs.substring(0,6));
console.log(kurs.replace("Modern","Güncel"));
console.log(kurs.split(" ")); //boşluğa göre ayır ve dizi yap
console.log(kurs.valueOf());
console.log(kurs.startsWith("M"));
console.log(kurs.endsWith("U"));