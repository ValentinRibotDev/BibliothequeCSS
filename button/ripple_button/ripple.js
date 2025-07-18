const btn = document.querySelectorAll('.ripple-btn'); // recupération de tous les btn qui doivent avoir l'effet glow sur la page

btn.forEach(btn => { //boucle car plusieurs boutons (a retirer si bouton unique)
  btn.onclick = function(e){ //Setup lors d'un clique sur le bouton
    let x = e.pageX - e.target.offsetLeft; //position de la sourie sur l'ecran au moement du clic en x
    let y = e.pageY - e.target.offsetTop; //position de la sourie sur l'ecran au moement du clic en y

    let ripples = document.createElement('span');
    ripples.style.left = x + 'px'; // positionnement du span en fonction de la variable X
    ripples.style.top = y + 'px'; // positionnement du span en fonction de la variable Y
    this.appendChild(ripples); //incorporation du span dans le bouton

    setTimeout(() => { //Supprime les span creer precedement apres un délai
      ripples.remove();
    },1000) // <- délai a modifier ici
  }
});