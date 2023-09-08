let step = "";
let spanWho = document.getElementById('spanWho');
let winner = "";
const who=()=>{
    if(step=='zero') {
        step = 'cross';
        spanWho.innerText = 'CROSS';
    } else {
        step='zero';
        spanWho.innerText= 'ZERO';
    }

}

who();

let blockItem = document.querySelectorAll('.blockItem');
let counter= 0;

blockItem.forEach((item)=>{
    item.addEventListener('click',()=>{
        if(!item.classList.contains('zero') && !item.classList.contains('cross')) {
        
            item.classList.add(step);

            if(step=='cross') {
                item.innerText="X";
            }

            if(step=='zero'){
                item.innerText="0";

            }
        counter++;
        who();
        zeroWin();
        crossWin();
        nowWin();
        }
        
    });
});

let win = 
[
    [0,1,2],
    [0,4,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]

let zeroWin=()=>{
    for(let i=0; i<win.length; i++) {

        if(
            blockItem[win[i][0]].classList.contains('zero') &&
            blockItem[win[i][1]].classList.contains('zero') &&
            blockItem[win[i][2]].classList.contains('zero')
        
        ){
            blockItem[win[i][0]].classList.add('winColor');
            blockItem[win[i][1]].classList.add('winColor');
            blockItem[win[i][2]].classList.add('winColor');

            winner= "ZERO";
            endGame(winner);
            return 1;
        }
    }
    
}

let crossWin=()=>{
    for(let i=0; i<win.length; i++) {

        if(
            blockItem[win[i][0]].classList.contains('cross') &&
            blockItem[win[i][1]].classList.contains('cross') &&
            blockItem[win[i][2]].classList.contains('cross')
        
        ){
            blockItem[win[i][0]].classList.add('winColor');
            blockItem[win[i][1]].classList.add('winColor');
            blockItem[win[i][2]].classList.add('winColor');

            winner= "CROSS";
            endGame(winner);
            return 1;
        }
    }
    
}

let nowWin=()=>{
    if(!crossWin() && !zeroWin() && (counter >=9)){

        winner = "DRAW"
        endGame(winner);

    }
}

let blockWinner=document.getElementById('blockWinner');
let spanWin = document.getElementById('spanWin');
let btnNewGame= document.getElementById('btnNewGame');

let blockArea = document.getElementById('blockArea');

let endGame=(winner)=>{
    blockArea.style.pointerEvents = 'none';
    blockWinner.style.display = 'flex';
    spanWin.innerText = winner;

}

btnNewGame.addEventListener('click', ()=>{
    document.location.reload();
})

