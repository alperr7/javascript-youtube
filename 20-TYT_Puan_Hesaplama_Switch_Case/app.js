/* 

?Sorular
1-Türkçe 40
2-Matematik 40
3-Sosyal Bilimler 20
4-Fen Bilimleri 20

--->100 puanı Ösym veriyor
--->Okul puanı max 60 veriyor

*/

let turkceDogru, turkceYanlis = 0;
let matematikDogru, MatematikYanlis = 0;
let sosyalDogru, sosyalYanlis = 0;
let fenDogru, fenYanlis = 0;
let puan=0;
let okulPuani = 0;

let yeniSatir = "\n\r";
let mesaj = "TYT Puan Hesaplama uygula1masına hoşgeldiniz!" + yeniSatir
    + " 1-Puan hesapla" + yeniSatir
    + " 2-Çıkış yap";
1
//alert(mesaj);

let secim = prompt(mesaj);

switch (secim) {
    case "1":

        okulPuani = Number(prompt("Okul puanını giriniz : "));
        turkceDogru = Number(prompt("Türkçe doğru sayınızı giriniz : "));
        turkceYanlis = Number(prompt("Türkçe yanlış sayınızı giriniz : "));

        matematikDogru = Number(prompt("Matematik doğru sayınızı giriniz : "));
        MatematikYanlis = Number(prompt("Matematik yanlış sayınızı giriniz : "));

        sosyalDogru = Number(prompt("Sosyal doğru sayınızı giriniz : "));
        sosyalYanlis = Number(prompt("Sosyal yanlış sayınızı giriniz : "));

        fenDogru = Number(prompt("Fen doğru sayınızı giriniz : "));
        fenYanlis = Number(prompt("Fen yanlış sayınızı giriniz : "));

        let dogruSayisi = turkceDogru + matematikDogru + sosyalDogru + fenDogru;
        let yanlisSayisi = turkceYanlis + MatematikYanlis + sosyalYanlis + fenYanlis;

        let kalanDogruSayisi = dogruSayisi - (yanlisSayisi / 4);
        puan = (kalanDogruSayisi * 4) + 100 + okulPuani;
        alert("TYT Puanınız : " + puan);
        break;
    case "2":
        alert("Uygulamadan çıkış yapıldı...");
        break;
    default:
        alert("Lütfen geçerli aralıkta değer giriniz : ");
        break;
}