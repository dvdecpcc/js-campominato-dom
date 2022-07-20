let startBtn = document.getElementById('start');
let quadGrid = document.getElementById('grid');
let clicked = document.getElementById('level');
let scoredPoints = document.getElementById('score');
let bombs = [];


startBtn.addEventListener('click',
    function(){
        quadGrid.innerHTML= '';
        score.innerHTML='';
        createGrid(clicked.value);
        started = true;
        count = 1;
    }
);




function createGrid(level){
    let sqrPlus='';
    let sqrNumber;
    switch (level){
        case 'easy':
            sqrNumber = 100;
            sqrPlus = 'easyLvl';
        break;
        case 'medium':
            sqrNumber = 81;
            sqrPlus = 'mediumLvl';
        break;
        case 'difficult':
            sqrNumber = 49;
            sqrPlus = 'diffLvl';
        break;
    }

    bombs = [];

    for (let y=1; y<=16; y++){
        const createBombs = createRandomNumber(bombs, 1, sqrNumber);
        bombs.push(createBombs);
        
    }
    console.log(bombs);

    for(x=1; x<=sqrNumber; x++){
        let mySqr = createSqr();
        mySqr.append(x);
        mySqr.classList.add(sqrPlus);
        quadGrid.append(mySqr);
        clickedStyle(mySqr);
        // selectedAlts(mySqr);
    }
}

let count = 0;
let started = true;


function createRandomNumber(clickedSqrs, min, max){
    let cleanSqr = false;
    let randomNumber;
    while (!cleanSqr){
        randomNumber = Math.floor(Math.random()*(max - min)+1 - min);
        if(clickedSqrs.includes(randomNumber)==false){
            cleanSqr =true;
        }
    } return randomNumber;
}

function createSqr(){
    let square = document.createElement('div');
    square.classList.add('square');
    
    return square;
}

function clickedStyle(mySqr){
    mySqr.addEventListener('click',
        function(){
            // this.classList.toggle('selected1');
        
            console.log(mySqr.innerHTML);
            if(started){
                if (bombs.includes(parseInt(mySqr.innerHTML))){
                    this.classList.add('selectedBomb');
                    started = false;
                } else{
                    console.log(this, this.classList);
                    this.classList.add('selected1');
                }
            }  score.innerHTML = `<p>punti totalizzati: ${count++}</p>`;  
        }
    )
};

