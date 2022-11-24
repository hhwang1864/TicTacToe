var Block1 = document.querySelector('#cell-1')
var Block2 = document.querySelector('#cell-2')
var Block3 = document.querySelector('#cell-3')
var Block4 = document.querySelector('#cell-4')
var Block5 = document.querySelector('#cell-5')
var Block6 = document.querySelector('#cell-6')
var Block7 = document.querySelector('#cell-7')
var Block8 = document.querySelector('#cell-8')
var Block9 = document.querySelector('#cell-9')
var winner = document.querySelector('.who-is-winner')

function checkWin() {
    // rows
    if (Block1.textContent ==='X' && Block2.textContent ==='X' && Block3.textContent ==='X') {
        winner.classList.add("newText")
        winner.textContent = 'X is the winner!'
    } else if (Block4.textContent ==='X' && Block5.textContent ==='X' && Block6.textContent ==='X') {
        winner.classList.add("newText")
        winner.textContent = 'X is the winner!'
    } else if (Block7.textContent ==='X' && Block8.textContent ==='X' && Block9.textContent ==='X') {
        winner.classList.add("newText")
        winner.textContent = 'X is the winner!' 
    } else if (Block1.textContent ==='O' && Block2.textContent ==='O' && Block3.textContent ==='O') {
        winner.classList.add("newText1")
        winner.textContent = 'O is the winner!' 
    } else if (Block4.textContent ==='O' && Block5.textContent ==='O' && Block6.textContent ==='O') {
        winner.classList.add("newText1")
        winner.textContent = 'O is the winner!'
    } else if (Block7.textContent ==='O' && Block8.textContent ==='O' && Block9.textContent ==='O') {
        winner.classList.add("newText1")
        winner.textContent = 'O is the winner!'
    //     // columns
    } else if (Block1.textContent ==='X' && Block4.textContent ==='X' && Block7.textContent ==='X') {
        winner.classList.add("newText")
        winner.textContent = 'X is the winner!'
    } else if (Block2.textContent ==='X' && Block5.textContent ==='X' && Block8.textContent ==='X') {
        winner.classList.add("newText")
        winner.textContent = 'X is the winner!'
    } else if (Block3.textContent ==='X' && Block6.textContent ==='X' && Block9.textContent ==='X') {
        winner.classList.add("newText")
        winner.textContent = 'X is the winner!'   
    } else if (Block1.textContent ==='O' && Block4.textContent ==='O' && Block7.textContent ==='O') {
        winner.classList.add("newText")
        winner.textContent = 'O is the winner!'
    } else if (Block2.textContent ==='O' && Block5.textContent ==='O' && Block8.textContent ==='O') {
        winner.classList.add("newText1")
        winner.textContent = 'O is the winner!'     
    } else if (Block3.textContent ==='O' && Block6.textContent ==='O' && Block9.textContent ==='O') {
        winner.classList.add("newText1")
        winner.textContent = 'O is the winner!' 
        //diagonals
    } else if (Block1.textContent ==='X' && Block5.textContent ==='X' && Block9.textContent ==='X') {
        winner.classList.add("newText")
        winner.textContent = 'X is the winner!'
    } else if (Block3.textContent ==='X' && Block5.textContent ==='X' && Block7.textContent ==='X') {
        winner.classList.add("newText")
        winner.textContent = 'X is the winner!'  
    } else if (Block1.textContent ==='O' && Block5.textContent ==='O' && Block9.textContent ==='O') {
        winner.classList.add("newText1")
        winner.textContent = 'O is the winner!'
    } else if (Block3.textContent ==='O' && Block5.textContent ==='O' && Block7.textContent ==='O') {
        winner.classList.add("newText1")
        winner.textContent = 'O is the winner!' 
    } else if (Block1.textContent !=='' && Block2.textContent !=='' && Block3.textContent !=='' && Block4.textContent !=='' && Block5.textContent !=='' && Block6.textContent !=='' && Block7.textContent !=='' && Block8.textContent !=='' && Block9.textContent !=='') {
        winner.textContent = 'We have a stalemate!' 
    } 
}
var count = 1
var player1 = 'X'
var player2 = 'O'
var audio1 = new Audio("captain-timo-on-duty.mp3")
var audio2 = new Audio("unleash-the-beast.mp3")
var gridNodeList = document.querySelectorAll('.box')
for (i=0; i < gridNodeList.length; i++ ) {
    gridNodeList[i].addEventListener('click', function(event) { 
        if (winner.textContent === 'Tic-Tac-Toe!') {               
            if (event.target.textContent === '') {
                if (count %2 === 0) {
                    event.target.textContent = 'O'
                    audio2.play()
                } else {
                    event.target.textContent = 'X'
                    audio1.play()
                }
                count++         
                checkWin(event.target)            
            } 
        }                
    })
 } 

