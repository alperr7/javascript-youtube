//Document Objesi

let value ; 

console.log(document.location);

//value = document.location.href;
// Bu özellik, tarayıcıdaki sayfanın adres çubuğundaki 
//URL'yi almak veya değiştirmek için kullanılır.



//value = document.location.hostname;
//tarayıcıda bulunan belgenin (document) mevcut 
//URL'sinin ana bilgisayar (hostname) bölümünü temsil eden bir özelliktir. 



//value = document.location.port
//tarayıcıda bulunan belgenin (document) mevcut URL'sinin
//port numarasını temsil eden bir JavaScript özelliğidir



// value = document.location.pathname;
//tarayıcıda bulunan belgenin (document) mevcut URL'sinin 
//yolu (path) kısmını temsil eden bir JavaScript özelliğidir


// value = document.characterSet;
// value =document.title;
// value=document.links.item(4);
// value = document.links.item(4).id;
// value = document.links.item(4).getAttribute("id");
// value = document.links.item(4).getAttribute("class");
// value = document.links.item(4).classList[3];

value = document.forms.item(1).id;

value = document.domain;
value=document.contentType;





console.log(value);