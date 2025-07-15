let btn = document.querySelector('.glow-btn'); // Recuperation du bouton 

//event lors du déplacement de la sourie
btn.onmousemove = function(e){
    let x = e.pageX - btn.offsetLeft; //position x de la sourie sur la page
    let y = e.pageY - btn.offsetTop; // poistion y de la sourie sur la page

    //ajouts des propriétés défini précedement 
    btn.style.setProperty('--x', x+'px');
    btn.style.setProperty('--y', y+'px');
}