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

    // console.log(slotX + " SLOTX")

    // let newSize = document.querySelector(".grid-slot");
    // newSize.style.width = slotX +  "px";
    // newSize.style.height = slotY + "px";

    // console.log(newSize.style.width + " NEW WIDTH")

    // let change = document.getElementsByClassName('grid-slot')
    // for(let i = 0; i < change.length; i++){
    //     change[i].style.width = slotX+"px";
    //     change[i].style.height = slotY+"px";
    // }
    // change.width = 400/sizeX;
    // change.height = 400/sizeY;

    document.getElementById("grid-container").innerHTML = "";
    // let newGrid = document.getElementById('grid-container');
    // // // grid-template-rows: repeat(16, 25px);
    // // // grid-template-columns: repeat(16, 25px);
    // newGrid.style.setProperty('grid-template-rows', 'repeat(' + sizeX + ', slotX+"px")');
    // newGrid.style.setProperty('grid-template-columns', 'repeat(' + sizeY + ', slotY+"px")');

    for(i = 0; i < (sizeX*sizeY); i++){
        let d = document.createElement('div');
        d.className = "grid-slot";
 
        // console.log(d.style.width)

        // d.textContent = '';
        document.getElementById('grid-container').append(d);
    }

    

    


}

document.addEventListener('mouseover', color);
