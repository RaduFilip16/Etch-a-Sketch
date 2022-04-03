const container = document.querySelector('div');


for(let j = 0; j < 16; j++ ){
    const row = document.createElement('div');
    row.style.cssText = "display: flex; flex-wrap: no-wrap";
    for(let i = 0; i < 16; i++ ){
        const square = document.createElement('div');
        square.style.cssText = "display: inline-block; height: 100px; width: 100px; background-color: red; border: black; border-style: solid; border-width: 10px";
        row.appendChild(square);
    }
    container.appendChild(row)
}


