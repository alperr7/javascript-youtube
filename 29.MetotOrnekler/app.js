// Kelime sayısı bulma uygulaması 

let metin = prompt("İçinde kaç harf olduğunu merak ettiğiniz metni giriniz ");
let altSatir = "\r\n";
let harf = prompt("Hangi harfin kaç tane olduğunu merak ediyorsunuz ? ");

let sonuc = bul(harf);
alert(metin + " cümlesindeki " + altSatir + harf + " harfinden " +  sonuc + " adet var");

function bul(harf){
    let toplam=0;
    for(let i=0;i<=metin.length;i++){
        if(metin.charAt(i).toLowerCase()==harf.toLowerCase()){
            toplam+=1;
        }

    }
    return toplam;
}