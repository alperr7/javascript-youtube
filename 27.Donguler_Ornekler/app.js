// Çarpım tablosu yapımı 

/*

1x1=1;
1x2=2
1x3=3
.
.
.
.
..

*/ 
// let carpım;
// for(let i=1;i<=10;i++){
    
//     for(let j=1;j<=10;j++){
//         carpım=i*j;
//        console.log(i + " x " + j + " = "+ carpım);
//     }

// } 


//ASAL SAYI BULMA UYGULAMASI

let sayi = Number(prompt("asal olup olmadığını merak ettiğiniz sayıyı girin"));

for(let i=2;i<=sayi;i++){
    if(sayi%i==0){
        alert("Sayınız asal değildir");
    }else {
        
    alert("Sayınız asal sayıdır");
    }
}