const blocks = document.querySelectorAll(".block");
const playerText = document.getElementById("player");
const errorText = document.getElementById("error");
let player = "X";
let gameOver = false;
let winner; 


function startGame(){
    playerText.textContent=`${player}'nın sırası`;
    blocks.forEach(function (block){
        block.addEventListener("click",chooseArea);
    });
}

function chooseArea(block){
    //eğer seçilen blok boşssa 
    if(block.textContent == ""){
        //Bloğun içeriğini şu anki oyuncunun sembolü ile doldur
        block.textContent=player;
        //Eğer oyuncu "O" ,se , metni kırmızı renge çevir
        if(player=="O"){
            block.style.color="red";
        }
        //Sıradaki oyuncuyu belirlemek için turnPlayer fonksiyonunu çağır
        turnPlayer();
    //Eğer seçilen blok doluysa
    }else{
        //Hata mesajını göster
        errorText.textContent="Boş değil la gardaş bu";
        //bloğa kırmızı bir kenarlık ekle
        block.style.border="2px solid red";
        
        //Belirli bir süre sonra hata mesajını ve kenarlığı kaldır
        setTimeout(() => {
            errorText.textContent="";
            block.style.border="1px solid black"},2500);
        }
    }


function turnPlayer(){
    // Eğer şu anki oyuncu "X" ise 
    if(player=="X"){
        //Oyuncuyu "O" olarak değiştir
        player="O";
        //Oyuncunun sıradaki olduğunu belirten metni güncelle
        playerText.textContent=`${player}'nın sırası`;
        return;
    //Eğer şu anki oyuncu "O" ise 
    }else if(player == "O"){
        //Oyuncuyu "X" olarak değiştir
        player = "X";
        //Oyuncunun sıradaki olduğunu belirten metni güncelle
        playerText.textContent=`${player}'nın sırası`;
    }
}

function checkWin(){
    checkRows();
    checkColumns();
    checkDiagonals();
}
//Bu JavaScript fonksiyonu, oyunun berabere bitip bitmediğini kontrol eder
function checkTie(){
    //Oyunun berabere(tie) olup olmadığını kontrol etmek için boşlukları içeren bir dizi oluştur
    const values = []; 
    //Her bir bloğun içeriğini value dizisine ekleyerek dizi oluştur
    blocks.forEach(function (block){
        values.push(block.textContent);
        
        //Eğer values dizisi iç boşlukları içermiyorsa
        if(!values.includes("")){
            //Oyun berabere (tie) durumundadır
            playerText.textContent="Tie !"; 
            blocks.forEach(function (block){
                //Tüm blokların üzerine tıklamayı devre dışı bırak
                block.style.pointerEvents="none";
            });
        }
    });
}
//Bu JavaScript fonksiyonu, oyunun satırlarında bir kazanan olup olmadığını kontrol eder
function checkRows(){
    //Satırları kontrol et 

    //İlk satır 
    let row1 = blocks[0].textContent==blocks[1].textContent && 
    blocks[0].textContent==blocks[2].textContent && blocks[0].textContent !== "";

    //İkinci satır 
    let row2 = blocks[3].textContent==blocks[4].textContent &&
        blocks[3].textContent == blocks[5].textContent && blocks[3].textContent !=="";

    //Üçüncü satır 
    let row3 = blocks[6].textContent==blocks[7].textContent && 
    blocks[6].textContent == block[8].textContent && blocks[6].textContent !=="";

    //Eğer herhangi bir satırda bir kazanan varsa , oyunu bitir 
        if(row1 || row2 || row3){
            gameOver = true;
        }
        // Eğer kazanan varsa, winner değişkenine kazananın sembolünü atanır
        if(row1){
            return winner = blocks[0].textContent;
        }
        if(row2){
            return winner = blocks[3].textContent;
        }
        if(row3){
            return winner = blocks[6].textContent;
        }
}

function checkColumns(){

    let col1 = blocks[0].textContent==blocks[3].textContent &&
    blocks[0].textContent==blocks[6].textContent && blocks[0].textContent !=="";

    let col2 = blocks[1].textContent==blocks[4].textContent && block[1].textContent==blocks[7].textContent &&
    blocks[1].textContent!=="";

    let col3 = blocks[2].textContent==blocks[5].textContent && blocks[2].textContent==blocks[8].textContent &&
    blocks[2].textContent !== "";

    if(col1 || col2 || col3){
        gameOver = true;
    }
    if(col1){
        return winner = blocks[0].textContent;
    }
    if(col2){
        return winner = blocks[1].textContent;
    }
    if(col3){
        return winner=blocks[2].textContent;
    }
}

//Bu JavaScript fonksiyonu, oyunun çapraz (diagonal) hatlarında bir kazananın olup olmadığını kontrol eder.

function checkDiagonals(){
    //Çapraz hatları kontrol et 

    //Birinci çapraz hat 
    let dia1 = blocks[0].textContent==blocks[4].textContent && 
    blocks[0].textContent==blocks[8].textContent && blocks[0].textContent !== "";

    let dia2 = blocks[2].textContent==blocks[4].textContent && 
    blocks[2].textContent == blocks[6].textContent && blocks[2].textContent !== "";

    //Eğer herhangi bir çapraz hat kazanmışsa oyunu bitir 
    if(dia || dia2){
        gameOver=true; 
    }
    //Eğer birinci çapraz hat kazanmışsa,winner değişkenine kazanın sembolünü atanır
    if(dia1){
        return winner=blocks[0].textContent;
    }
    if(dia2){
        return winner=blocks[2].textContent;
    }
}

startGame();
