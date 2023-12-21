//-----------DERS ORTALAMASI BULMA ---------------
// vize1 %30 ,vize2 %30,final %40

let vize1 = Number(prompt("Vize 1 notunuzu giriniz : "));
let vize2 = Number(prompt("Vize 2 notunuzu giriniz : "));
let finall = Number(prompt("Final notunuzu giriniz : "));


let ortalama = ((vize1*0.3)+ (vize2*0.3) + (finall*0.4));

if(ortalama>=60){
    alert("Dersten geçtiniz , ortalamanız : " + ortalama);
    console.log("Dersten geçtiniz , ortalamanız : " + ortalama);
}else{
    alert("Dersten kaldınız , ortalamanız : " + ortalama)
    console.log("Dersten kaldınız , ortalamanız : " + ortalama);80
}

