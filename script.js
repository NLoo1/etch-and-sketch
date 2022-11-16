function init(){
    for(i = 0; i < 256; i++){
        let d = document.createElement('div');
        d.className = "grid-slot";
        d.textContent = '';
        document.getElementById('grid-container').append(d);
    }

}

function color(e){
    let b = document.elementFromPoint(e.clientX, e.clientY);
    // console.log(b.tagName)
    if(b.tagName == 'DIV' && b.className == "grid-slot"){
        // console.log(b);
        b.classList.add('hovered');
    }
    
}

function clean(){
    console.log('button')
    let c = document.getElementsByClassName('hovered');
    // console.log(c.length);
    
    while(c.length){
        c[0].classList.remove('hovered');
    }

    
}

function newSize(){
    let sizeX = prompt('Please enter how many squares for X');
    let sizeY = prompt('Please enter how many squares for Y');

    let slotX = 400/sizeX;
    let slotY = 400/sizeY;

    let x = document.styleSheets[0];
    x.insertRule('.grid-slot{width: slotX; height:slotY', 0)


    document.getElementById("grid-container").innerHTML = "";


    for(i = 0; i < (sizeX*sizeY); i++){
        let d = document.createElement('div');
        d.className = "grid-slot";
 
        document.getElementById('grid-container').append(d);
    }

    

    


}

document.addEventListener('mouseover', color);
