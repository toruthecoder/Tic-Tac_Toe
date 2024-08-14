let audio = new Audio('ting.mp3');

let turn = "X";

isgameOver = false;

// Change turn function

function changeTurn (){
    turn = turn === 'X' ? 'O' : 'X';
}

// Winner function

function Winner (){
    let boxText = document.querySelectorAll('.textBox');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    let score = document.querySelectorAll('.textScore');
    wins.forEach(e => {
        if ((boxText[e[0]].innerHTML === boxText[e[1]].innerHTML) && (boxText[e[2]].innerHTML === boxText[e[1]].innerHTML) && (boxText[e[0]].innerHTML !== '')){
            if (isgameOver = true){
                score[1].innerHTML = boxText[e[0]].innerHTML + 'Won';    
                document.querySelector('.imgbox img').style.visibility = "visible";
            }
        }
    })
}


// Main Logic

let boxes = document.querySelectorAll('.box');
Array.from(boxes).forEach((element) => {
    let textBoxes = element.querySelectorAll('.textBox');
    let box = textBoxes[0];
    element.addEventListener('click' , () => {
        if(box.innerHTML === ''){
            box.innerHTML = turn;
            changeTurn();
            audio.play();
            Winner();
            if(!isgameOver){
                let turned = document.querySelectorAll('.textScore');
                turned[0].innerHTML = 'for' + turn;
                isgameOver = false;
            }
        }
    })
})


// Reset function

let reset = document.querySelector('.btn');
reset.addEventListener('click', ()=>{
    let textBoxes = document.querySelectorAll('.textBox');
    Array.from(textBoxes).forEach((element) => element.innerHTML = '');
    document.querySelectorAll('.textScore').forEach(element => element.innerHTML = '');
    turn = 'X';
    isgameOver = false;
    let turneds = document.querySelectorAll('.textScore');
    turneds[0].innerHTML = 'turn for' + turn;
    document.querySelector('.imgbox img').style.visibility = "hidden";
})