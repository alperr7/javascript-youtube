//-------------MANTIKSAL OPERATÖRLER--------------

/*
    && : ve
    || : veya
    !  : değil
*/

// Yaşınız 18'den büyükse ve 3000 TL para olması ve sağlığınız yerindeyse

let yas = 20;
let para = 3500;
let saglikMi = false;
let hakSayi=3;
// console.log(yas>18 && para>3000 && saglikMi==true);     False 
// console.log(yas>18 && para>3000 || saglikMi==true);  True

// console.log( !(5>3)); False

console.log((para>3000 && hakSayi<3) || (yas>18 && saglikMi));

