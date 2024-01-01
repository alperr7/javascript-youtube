//Dizilere Başlayalım 

// let sayilar = [0,1,2,3,4,5,"Enes",6,7,8,9,"Ali"];

// console.log(sayilar[6]);

// sayilar[10]="Alper";

// console.log(sayilar[10]);

// console.log(sayilar.length-1); sondaki elemanı vermesi için

// let isimler =  ["Enes","Alper","Sude","Sıla"];
// console.log(isimler);


// let karisikDizi = [1,"Enes",5.7,true,null,undefined];
// console.log(karisikDizi[3]);


function topla(){
    console.log(15);
}

let personel1 = {
    isim:"Enes",
    soyisim:"Bayram",
    yas: 23,
}

let personel2 = {
    isim:"Alper",
    soyisim:"Kandemir",
    yas:21,
}

let rakamlar = [0,1,2,3,4,5,6,7,8,9];

let personelArray = [personel1,personel2,1,true,rakamlar];
// console.log(personelArray[4][5]);
// console.log(personelArray[0].isim);

// console.log(personelArray[4]);



let dizi1 = ["Enes","Alper"];
let dizi2 = new Array();

dizi2[0]="Enes";
dizi2[1]="Alper";

// console.log(typeof dizi1);

// foreach: dizilerde kullanıyoruz


//FOREACH DÖNGÜSÜ

let isimler = ["Alper","Sude","Sıla","Enes","Yasin","Yunus","Baki"];


for(let i=0;i<isimler.length;i++){
    console.log(isimler[i]);
}

// isimler.forEach(function(isim){
//     console.log(isim);
// });
