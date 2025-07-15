let glow_btns = document.querySelectorAll('.glow-btn'); // Recuperation de tous les boutons avec la class 'glow-btn'

//Boucle foreach
glow_btns.forEach(btn => {
    //event lors du déplacement de la souris
    btn.onmousemove = function(e){
        let x = e.pageX - btn.offsetLeft; //position x de la souris sur la page
        let y = e.pageY - btn.offsetTop; // poistion y de la souris sur la page

        //ajouts des propriétés défini précedement 
        btn.style.setProperty('--x', x+'px');
        btn.style.setProperty('--y', y+'px');
    }
})
