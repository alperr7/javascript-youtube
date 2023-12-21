// ÇOKLU İF KULLANMAK

/* 

adını ve tckn 
Ad: boş geçilemez
TCKN : 11 karakterden oluşun
*/
let ad = prompt("İsminizi giriniz : ");
let tckn = prompt("TCKN giriniz");

kontrolEt2(ad,tckn);



function kontrolEt(ad , tckn){

    if(ad!=""){
        if(tckn.length== 11){
            console.log("İsim ve tckn problemsiz girildi");
        }else{
            console.log("Lütfen tcnizi 11 karakter olarak giriniz ");
        }
    }else{
        console.log("Lütfen isim alanını boş bırakmayın !! ");
    }
}

function kontrolEt2(ad , tckn){
    if(ad==""){
        console.log("Lütfen isim alanını boş bırakmayın");
        return;
    }
    if(tckn.length!=11){
        console.log("Lütfen tc nizi 11 karakter olarak giriniz");
        return;
    }

    console.log("Lütfen tc nizi 11 karakter olarak giriniz");
}