const container = document.querySelector('div');
/* First layout starts automatically 16 by 16 squares */
canvas(16)

function canvas(dimension){
/* Creates 16 rows */
let color = 16777215;
for(let j = 0; j < dimension; j++ ){
    const row = document.createElement('div');
    row.style.cssText = "display: flex; flex-wrap: no-wrap;";
    /* Each row has 16 squares */
    for(let i = 0; i < dimension; i++ ){
        const square = document.createElement('div');
        square.style.cssText = "height:auto; aspect-ratio: 1/1;flex-grow:1; background-color: red; border: white; border-style: solid; border-width: 2%";
        row.appendChild(square);
        square.addEventListener('mouseover', function(e){
             tileColor = color.toString(16);
             e.target.style.background = `#${tileColor}`;
             if(color >= 1710618)
             color -= 1710618;
             
    });
    /* Each row is then inserted into the main div container */
    container.appendChild(row)
}
}
}
/* Event listener for the button that resets layout and sets new dimension */
const btn = document.querySelector('.btn');
btn.addEventListener('click', function(){
    let dimension = parseInt(prompt("Choose new canvas dimension", 16));
    if(dimension > 100 || isNaN(dimension)){
        alert("Type a number between 1 and 100");
    }
    else{
    container.innerHTML = "";
    canvas(dimension);
    }
});
