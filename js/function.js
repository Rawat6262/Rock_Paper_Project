console.log(document.querySelector('.rock_img'));
let finalresult = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    lose: 0,
    tie: 0
};
Score();

document.querySelector('.rock').addEventListener('click', () => {
    pickmove('rock');
})
document.querySelector('.paper').addEventListener('click', () => {
    pickmove('paper');
})
document.querySelector('.scissor').addEventListener('click', () => {
    pickmove('scissors');
})
document.querySelector('.restart_button').addEventListener('click', () => {
    finalresult.win = 0;
    finalresult.lose = 0;
    finalresult.tie = 0;
    localStorage.removeItem('score');
    Score();
})
document.body.addEventListener('keydown', () => {
    console.log(event.key)

    if (event.key === 'r') {
        pickmove('rock');

    } else if (event.key === 'p') {
        pickmove('paper');
    } else if (event.key === 's') {
        pickmove('scissors')
    }
})

function ComputerMove() {
    let computerMove = Math.random();
    let Movebycomputer;
    if (computerMove >= 0 && computerMove < 1 / 3) {
        Movebycomputer = 'rock';
    } else if (computerMove >= 1 / 3 && computerMove < 2 / 3) {
        Movebycomputer = 'paper';
    } else {
        Movebycomputer = 'scissors';
    }
    return Movebycomputer;
}
let IndentID;
let isPlaygame = true;

function Autoplay() {

    if (isPlaygame === true) {
        IndentID = setInterval(function() {
            let automove = ComputerMove();
            pickmove(automove);
            isPlaygame = false;
        }, 1000);
        let val = document.querySelector('.Autoplay');
        val.innerText = 'Stop play';
    } else {
        clearInterval(IndentID);
        isPlaygame = true;
        let val = document.querySelector('.Autoplay');
        val.innerText = 'Auto play';
    }

}
document.querySelector('.Autoplay').addEventListener('click', () => {
    Autoplay();
})

function pickmove(playerMove) {
    let Cmove = ComputerMove();
    let result;
    if (playerMove === 'rock') {
        if (Cmove === 'rock') {
            result = 'Tie.';
        } else if (Cmove === 'paper') {
            result = 'You lose.';
        } else {
            result = 'You win.';
        }
    } else if (playerMove === 'paper') {
        if (Cmove === 'rock') {
            result = 'You win.';
        } else if (Cmove === 'paper') {
            result = 'Tie.';
        } else {
            result = 'You lose.';
        }
    } else {
        if (Cmove === 'rock') {
            result = 'You lose.';
        } else if (Cmove === 'paper') {
            result = 'You win.';
        } else {
            result = 'Tie.';
        }
    }
    if (result === 'You win.') {
        finalresult.win += 1;
    } else if (result === 'You lose.') {
        finalresult.lose += 1;
    } else {
        finalresult.tie += 1;
    }
    Score();
    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-move').innerHTML = `You <img class="paper_img" src="/image/${playerMove}-emoji.png"> , <img class="paper_img" src="/image/${Cmove}-emoji.png"> Computer`;
    localStorage.setItem('score', JSON.stringify(finalresult));
    // alert(`you pick ${playerMove} Computer move is ${Cmove} Result is  ${result} Score are `)
}


function Score() {
    document.querySelector('.js-score').innerText = `Win= ${finalresult.win} ,Lose= ${finalresult.lose} ,Tie= ${finalresult.tie}`
}

// function win() {
//     document.querySelector('.js-win').innerHTML = `You Win`;
// }

// function lose() {
//     document.querySelector('.js-lose').innerHTML = `You Lose`;
// }

// function Tie() {
//     document.querySelector('.js-tie').innerHTML = `Tie`;
// }
// let run = {
//     name: 'raj',
//     score: 0
// }
// let runs = run;
// runs.score = 80;
// console.log(run.score);