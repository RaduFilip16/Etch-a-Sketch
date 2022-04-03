const container = document.querySelector('div');
canvas(16)

function canvas(dimension){
/* Creates 16 rows */
for(let j = 0; j < dimension; j++ ){
    const row = document.createElement('div');
    row.style.cssText = "display: flex; flex-wrap: no-wrap;  ";
    /* Each row has 16 squares */
    for(let i = 0; i < dimension; i++ ){
        const square = document.createElement('div');
        square.style.cssText = "height:20px; aspect-ratio: 1/1;flex-grow:0; background-color: red; border: white; border-style: solid; border-width: 2%";
        row.appendChild(square);
        square.addEventListener('mouseover', function(e){
             e.target.style.background = 'blue';
    });
    /* Each row is then inserted into the main div container */
    container.appendChild(row)
}
}
}


const btn = document.querySelector('.btn');
btn.addEventListener('click', function(){
    let dimension = parseInt(prompt("Choose new canvas dimension"));
    container.innerHTML = "";

    canvas(dimension);
});
