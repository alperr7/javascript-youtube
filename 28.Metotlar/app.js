//Parametresiz ve geriye değer döndürmeyen metot tanımlamak 


// yazdir();
// debugger;
// yazdir();
// yazdir();

// //hazırladığınız metot...
// function yazdir(){
//     console.log("Alper");
// }

// function topla(){
//     console.log(5+7);
// }
// topla();

//-----------------------------------------------------------------------

//Parametreli metot tanımlamak  

// function yazdir(isim,soyisim){
//     console.log("Ad: " + isim + " soyad: " + soyisim);
// }

// yazdir("Alper","Kandemir");


// function cube(sayi){
//     console.log(sayi*sayi*sayi);
// }

// cube(2);

// var yas = Number(prompt("Lütfen yaşınızı giriniz : "));

// function kontrolEt(yas){
//     if(yas > 18){
//         console.log("Ehliyeti alabilirsiniz");
//     }else{
//         log("Egliyet alamazsınız");
//     }
// }

// kontrolEt(yas);


//-----------------------------------------------------------------------


//Geriye değer döndüren metot tanımlamak 

let donenDeger = cub(3);
console.log(donenDeger);

function cub(sayi){
    let sonuc = sayi * sayi * sayi; 
    return sonuc;
}

function kareAl(sayi){
    let sonuc = sayi * sayi; 
    return sonuc; 
}

