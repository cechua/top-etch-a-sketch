function fillGrid() {
    var gridCount = 16
    var gridHTML = ''
    for(let i = 0; i < gridCount; i++) 
    {
        gridHTML+= '<div class="gridrow">'
        for(let j = 0; j < gridCount; j++)
        {
            gridHTML+= '<div class="gridbox" id="gridBox' +j+'"></div>'
        }
        gridHTML+= '</div>'
    }
    document.getElementById('container').innerHTML = gridHTML
}

fillGrid();