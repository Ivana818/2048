document.addEventListener('DOMContentLoaded', () => {
    const gridDisplay = document.querySelector('.grid')
    const scoreDisplay = document.querySelector('#score')
    let squares = []
    let curScore = 0
    let width = 4
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
            // endGame()
        }
        else generate()
    }

    // function endGame(){
    //     let zeros = 0
    //     for (let i = 0; i < squares.length; i++){
    //         if (squares.innerHTML == 0){
    //             zeros++
    //         }
    //     }
        // if (zeros === 0) {
        //     document.removeEventListener('keydown', control)
        //     alert("Lose")
        // }
    // }

    function combineRow(){
        for (let i = 0; i < 15; i++){
            if (squares[i].innerHTML === squares[i+1].innerHTML){
                let combineTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i+1].innerHTML)
                squares[i].innerHTML = combineTotal
                squares[i+1].innerHTML = 0
                curScore += combineTotal
                score.innerHTML = curScore
            }
        }
    }

    function combineCol(){
        for (let i = 0; i < 12; i++){
            if (squares[i].innerHTML === squares[i+width].innerHTML){
                let combineTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i+width].innerHTML)
                squares[i].innerHTML = combineTotal
                squares[i+width].innerHTML = 0
                curScore += combineTotal
                score.innerHTML = curScore
            }
        }
    }

    function moveRight(){
        for (let i = 0; i < 16; i++){
            if (i % 4 == 0){
                let valone = squares[i].innerHTML
                let valtwo = squares[i+1].innerHTML
                let valthree = squares[i+2].innerHTML
                let valfour = squares[i+3].innerHTML
                let row = [parseInt(valone), parseInt(valtwo), parseInt(valthree), parseInt(valfour)]
                
                let filteredRow = row.filter(num => num)
                // console.log(filteredRow)
                let missing = 4 - filteredRow.length
                let zeros = Array(missing).fill(0)
                let newRow = zeros.concat(filteredRow)
                // console.log(newRow)
                squares[i].innerHTML = newRow[0]
                squares[i+1].innerHTML = newRow[1]
                squares[i+2].innerHTML = newRow[2]
                squares[i+3].innerHTML = newRow[3]
            }
        }
    }

    function moveLeft(){
        for (let i = 0; i < 16; i++){
            if (i % 4 == 0){
                let valone = squares[i].innerHTML
                let valtwo = squares[i+1].innerHTML
                let valthree = squares[i+2].innerHTML
                let valfour = squares[i+3].innerHTML
                let row = [parseInt(valone), parseInt(valtwo), parseInt(valthree), parseInt(valfour)]
                
                let filteredRow = row.filter(num => num)
                // console.log(filteredRow)
                let missing = 4 - filteredRow.length
                let zeros = Array(missing).fill(0)
                let newRow = filteredRow.concat(zeros)
                // console.log(newRow)
                squares[i].innerHTML = newRow[0]
                squares[i+1].innerHTML = newRow[1]
                squares[i+2].innerHTML = newRow[2]
                squares[i+3].innerHTML = newRow[3]
            }
        }
    }

    function moveDown(){
        for (let i = 0; i < 4; i++){
            let valone = squares[i].innerHTML
            let valtwo = squares[i+width].innerHTML
            let valthree = squares[i+width*2].innerHTML
            let valfour = squares[i+width*3].innerHTML
            let col = [parseInt(valone), parseInt(valtwo), parseInt(valthree), parseInt(valfour)]

            let filteredCol= col.filter(num => num)
            // console.log(filteredCol)
            let missing = 4 - filteredCol.length
            let zeros = Array(missing).fill(0)
            let newCol = zeros.concat(filteredCol)
            // console.log(newCol)
            squares[i].innerHTML = newCol[0]
            squares[i+width].innerHTML = newCol[1]
            squares[i+width*2].innerHTML = newCol[2]
            squares[i+width*3].innerHTML = newCol[3]
        
        }
    }

    function moveUp(){
        for (let i = 0; i < 4; i++){
            let valone = squares[i].innerHTML
            let valtwo = squares[i+width].innerHTML
            let valthree = squares[i+width*2].innerHTML
            let valfour = squares[i+width*3].innerHTML
            let col = [parseInt(valone), parseInt(valtwo), parseInt(valthree), parseInt(valfour)]

            let filteredCol= col.filter(num => num)
            // console.log(filteredCol)
            let missing = 4 - filteredCol.length
            let zeros = Array(missing).fill(0)
            let newCol = filteredCol.concat(zeros)
            // console.log(newCol)
            squares[i].innerHTML = newCol[0]
            squares[i+width].innerHTML = newCol[1]
            squares[i+width*2].innerHTML = newCol[2]
            squares[i+width*3].innerHTML = newCol[3]
        
        }
    }

    function control(e){
        if (e.key === 'ArrowLeft') keyLeft()
        else if (e.key == 'ArrowRight') keyRight()
        else if (e.key == 'ArrowDown') keyDown()
        else if (e.key == 'ArrowUp') keyUp()
    }

    document.addEventListener('keydown', control)

    function keyRight(){
        moveRight()
        combineRow()
        moveRight()
        generate()
    }

    function keyLeft(){
        moveLeft()
        combineRow()
        moveLeft()
        generate()
    }

    function keyDown(){
        moveDown()
        combineCol()
        moveDown()
        generate()
    }

    function keyUp(){
        moveUp()
        combineCol()
        moveUp()
        generate()
    }
})