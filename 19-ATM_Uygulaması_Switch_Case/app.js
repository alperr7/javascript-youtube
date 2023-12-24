/* 
1-Bakiye görüntüleme
2-Para çekme
3-Para yatırma
4-Çıkış

ATM Uygulaması


*/


var yeniSatir = "\r\n";
var mesaj = "Lütfen yapmak istediğiniz işlemi seçiniz" + yeniSatir
    + "1-Bakiye görüntüleme" + yeniSatir
    + "2-Para çekme" + yeniSatir
    + "3-Para yatırma" + yeniSatir
    + "4-Çıkış"

var deger = Number(prompt(mesaj));
var bakiye = 10000, miktar;


switch (deger) {
    case 1:
        console.log("Bakiyeniz : " + bakiye);
        break;
    case 2:
        miktar = Number(prompt("Çekmek istediğiniz miktarı giriniz : "));
        if (bakiye >= miktar) {
            bakiye -= miktar;
            console.log("Kalan para : " + bakiye);
        }else{
            console.log("Bakiye yetersiz ! ");
        }

        break;
    case 3:
        miktar = Number(prompt("Yatırmak istediğiniz miktarı giriniz : "));
        bakiye += miktar;
        console.log("Kalan para : " + bakiye);
        break;
    case 4:
        console.log("Sistemden çıkış yapılıyor ...");
        break;
    default:
        console.log("Lütfen geçerli bir sayı giriniz : ");
        break;

}