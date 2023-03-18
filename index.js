
function mouseEnterEvent(e) {
    e.classList.add('boxhovered')
}

function fillGrid(gridCount) {
    var gridCount = Number(gridCount) <= 64 ? Number(gridCount) : 64
    console.log(gridCount)
    var gridHTML = ''
    for(let i = 0; i < gridCount; i++) 
    {
        gridHTML+= '<div class="gridrow">'
        for(let j = 0; j < gridCount; j++)
        {
            gridHTML+= '<div class="gridbox" id="gridBox' +j+'" onmouseenter="mouseEnterEvent(this)"></div>'
        }
        gridHTML+= '</div>'
    }
    document.getElementById('container').innerHTML = gridHTML
}

function promptUser(){
    let gridCount = prompt('Enter a number for desired box count(max of 64).')
    fillGrid(gridCount);
}

