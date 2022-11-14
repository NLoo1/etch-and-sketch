function init(){
    for(i = 0; i < 256; i++){
        let d = document.createElement('div');
        d.className = "grid-slot";
        d.textContent = '';
        document.getElementById('grid-container').append(d);
    }

}