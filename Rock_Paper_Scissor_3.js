const scoreCard = JSON.parse(localStorage.getItem('score')) ||{
    Win: 0,
    Lose: 0,
    Tie:0
};

jsScore();

function playGame(yourChoice){

    let computerChoice = pickrandom();

    let result='';

    if(yourChoice === 'Rock'){
        if(computerChoice === 'Rock'){
            result='Tie';
            scoreCard.Tie++;
        }
        else if(computerChoice === 'Paper'){
            result='Lose';
            scoreCard.Lose++;
        }
        else if(computerChoice === 'Scissors'){
            result='Win';
            scoreCard.Win++;
        };
    }
    else if(yourChoice === 'Paper'){
        if(computerChoice === 'Rock'){
            result='Win';
            scoreCard.Win++;
        }
        else if(computerChoice === 'Paper'){
            result='Tie';
            scoreCard.Tie++;
        }
        else if(computerChoice === 'Scissors'){
            result='Lose';
            scoreCard.Lose++;
        };
    }
    else if( yourChoice === 'Scissors'){
        if(computerChoice === 'Rock'){
            result='Lose';
            scoreCard.Lose++;
        }
        else if(computerChoice === 'Paper'){
            result='Win';
            scoreCard.Win++;
        }
        else if(computerChoice === 'Scissors'){
            result='Tie';
            scoreCard.Tie++;
        };
    }
    document.querySelector('.js_result').innerHTML = `${result}`
    document.querySelector('.js_moves').innerHTML = `Your ${yourChoice} - ${computerChoice} Computer`

    localStorage.setItem('score', JSON.stringify(scoreCard));

    jsScore();
    
}
function pickrandom(){
    let randomchoice = '';
    const randomNumber = Math.random();

    if(randomNumber >= 0 && randomNumber < 1/3){
        randomchoice= 'Rock';
    }
    else if(randomNumber >= 1/3 && randomNumber < 2/3){
        randomchoice= 'Paper';
    }
    else if(randomNumber >= 2/3 && randomNumber < 1){
        randomchoice= 'Scissors';
    }
    
    return randomchoice;
}

function jsScore(){
    document.querySelector('.js_score').innerHTML=`Wins: ${scoreCard.Win}, Loses: ${scoreCard.Lose}, Ties: ${scoreCard.Tie}`;
}

let autoplaying = false;
let intervalid ;

function autoplay(){
    if(!autoplaying){
        intervalid = setInterval(function(){
            let yourChoice = pickrandom();
            playGame(yourChoice);
        },1000);
        
        document.querySelector('.autobutton').innerHTML= 'Stop Playing';
        autoplaying = true;
    }
    else{
        clearInterval(intervalid);
        document.querySelector('.autobutton').innerHTML= 'Auto Play';
        autoplaying = false;
    }
}