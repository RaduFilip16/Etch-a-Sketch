const container = document.querySelector('div');
canvas(16)





function canvas(dimension){
/* Creates 16 rows */
for(let j = 0; j < dimension; j++ ){
    const row = document.createElement('div');
    row.style.cssText = "display: flex; flex-wrap: no-wrap;";
    /* Each row has 16 squares */
    for(let i = 0; i < dimension; i++ ){
        const square = document.createElement('div');
        square.style.cssText = "height:auto; aspect-ratio: 1/1;flex-grow:1; background-color: red; border: white; border-style: solid; border-width: 2%";
        row.appendChild(square);
        square.addEventListener('mouseover', function(e){
            let randomColor = Math.floor(Math.random() * 16777215).toString(16);
             e.target.style.background = `#${randomColor}`;
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
