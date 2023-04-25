const pixelContainer = document.getElementById('pixel-container');
const changeGridSizeBtn = document.getElementById('change-grid-size-btn')
const pixelElement = document.querySelectorAll('pixel')

let gridSize = 16;

changeGridSizeBtn.addEventListener('click', updateGrid)

function createGrid(size) {
    pixelContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    pixelContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`

    for (let i = 0; i < size * size; i++){
        const pixels = document.createElement('div');
        pixels.classList.add('pixel');
        pixelContainer.appendChild(pixels)
    }
}

createGrid(gridSize)

function updateGrid () {
    let newGrid = prompt('enter a number')
    gridSize = parseInt(newGrid)
    removeOldGrid()
    createGrid(gridSize)
}

function removeOldGrid (){
    while (pixelContainer.lastElementChild){
        pixelContainer.removeChild(pixelContainer.lastElementChild)
    }
}




console.log(pixelElement);