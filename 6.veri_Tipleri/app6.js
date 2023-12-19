/*
? Veri Tipleri

1-String
2-Number
3-Boolean
4-Null
5-Undefined
6-Object
7-Function

*/
//------------STRİNG VERİTİPİ-----------
// let isim = "Alper Kandemir 20 yaşındadır.";
// console.log(isim);
// console.log(typeof isim);

//----------- NUMBER VERTİPİ-------------
// let sayi1 = 10;

// console.log(sayi1);
// console.log(typeof sayi1);

// let a = "5";
// console.clear();
// console.log(typeof a);

// let stringDegisken = "Yaşınız : ";
// let yas = 23; 

// console.log(stringDegisken + yas);


//---------BOOLEAN VERTİPİ --------------
// boolean : true ve false'dan oluşur
// console.log(5>8);

// let a  = 3;
// let b = 12;
// let sonuc = a+b;
// console.log(sonuc>18);

//--------------NULL VERİTİPİ---------------
// let a = null;  
// console.log(a);

//-----------UNDEFİNED VERİTİPİ---------------

// let a;
// console.log(typeof a);

//primitive ve referans tipler n edir , farkları nelerdir ? 

// let insan = {
//     isim : "Alper",
//     soyisim: "Kandemir",
//     yas : 20
// }

// console.log(typeof insan);

// let rakamlar = [1,2,3,4,5];
// console.log(typeof rakamlar);


let func = function(){
    console.log("Merhaba");
}
func();
console.log(typeof func);