let startBtn = document.getElementById('start');
let quadGrid = document.getElementById('grid');
let clicked = document.getElementById('level');


startBtn.addEventListener('click',
    function(){
        quadGrid.innerHTML= '';
        createGrid(clicked.value);
    }
)




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

    for(x=1; x<=sqrNumber; x++){
        let mySqr = createSqr();
        mySqr.append(x);
        mySqr.classList.add(sqrPlus);
        quadGrid.append(mySqr);
        clickedStyle(mySqr);
    }
}


function createSqr(){
    let square = document.createElement('div');
    square.classList.add('square');
    
    return square;
}

function clickedStyle(mySqr){
    mySqr.addEventListener('click',
        function(){
            this.classList.toggle('selected1');
        
            console.log(mySqr.innerHTML);
        }
    )
}