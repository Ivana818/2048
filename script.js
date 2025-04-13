document.addEventListener('DOMContentLoaded', () => {
    const gridDisplay = document.querySelector('.grid')
    const scoreDisplay = document.querySelector('#score')
    let squares = []
    function createBoard(){
        for (let i = 0; i < 16; i++){
            const square = document.createElement('div')
            square.innerHTML = 0
            gridDisplay.appendChild(square)
            squares.push(square)
        }
        generate()
        generate()
    }
    createBoard()

    function generate(){
        const randomNum = Math.floor(Math.random() * squares.length)
        if (squares[randomNum].innerHTML == 0) {
            squares[randomNum].innerHTML = 2
        }
        else generate()
    }
})