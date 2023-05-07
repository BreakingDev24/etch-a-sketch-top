const pixelContainer = document.getElementById('pixel-container');
const changeGridSizeBtn = document.getElementById('change-grid-size-btn');
const changeColorBtn = document.querySelectorAll('.change-color-btn')

let gridSize = 16;
let color = '';

changeGridSizeBtn.addEventListener('click', updateGrid)


function createGrid(size) {
    pixelContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    pixelContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
    
    for (let i = 0; i < size * size; i++){
        let pixels = document.createElement('div');
        pixels.classList.add('pixel');
        pixelContainer.appendChild(pixels)
    }
    const pixelElement = document.querySelectorAll('.pixel')
    pixelElement.forEach(pixelElement => pixelElement.addEventListener('mouseover', changePixelColor));
}

createGrid(gridSize)

function changePixelColor () {
    let rainbowColor = ['blue', 'red', 'green', 'pink', 'purple', 'yellow']
    switch(color) {
        case 'rainbow':
            this.style.backgroundColor = rainbowColor[Math.floor(Math.random() * rainbowColor.length)]
            break;
        case 'black':
            this.style.backgroundColor = color
            break
        case 'white':
            this.style.backgroundColor = color
    }
}


function setColor (event) {
    switch(event.target.dataset.color){
        case 'black':
            color = 'black'
            break;
        case 'rainbow':
            color = 'rainbow'
            break;
        case 'eraser':
            color = 'white'
            break;
        case 'clear':
            clearGrid();
            break
    }
}


function updateGrid () {
    let newGrid = prompt('enter a number')
    while (newGrid > 100) {
        newGrid = prompt('enter a number')
    } 
    gridSize = parseInt(newGrid)

    removeOldGrid()
    createGrid(gridSize)
}

function removeOldGrid (){
    while (pixelContainer.lastElementChild){
        pixelContainer.removeChild(pixelContainer.lastElementChild)
    }
}

function clearGrid() {
    const pixelElement = document.querySelectorAll('.pixel')
    pixelElement.forEach(pixelElement => pixelElement.style.backgroundColor = "")
}


changeColorBtn.forEach(changeColorBtn => {
    changeColorBtn.addEventListener('click', setColor)
})

