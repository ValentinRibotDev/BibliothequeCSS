let btn = document.querySelectorAll('.pixel-btn'); // recupération de tous les btn qui doivent avoir l'effet pixel sur la page

btn.forEach(button => {
  let pixelContainer = button.querySelector('.pixel-container'); //recupération du bouton
  let pixelSize = 5;  //choix de la taille de chaque pixel (modifiable)
  let btnWidth = button.offsetWidth; //largeur du bouton 
  let btnHeight = button.offsetHeight; // hauteur du bouton
  let cols = Math.floor(btnWidth/pixelSize); // largeur d'une colonne arondis (largeur du bouton divisé par la taille d'un pixel)
  let rows = Math.floor(btnHeight/pixelSize); // hauteur d'une ligne arondis (hauteur du bouton divisé par la taille d'un pixel)

  for (let row = 0; row < rows; row++){ //boucle for pour les lignes
    for(let col = 0; col < cols; col++){ //boucle for pour les collones
      let pixel = document.createElement('div'); // création d'une div pour chaque boucle for
      pixel.classList.add('pixel'); // ajout de la class 'pixel' a chaque nouvelle div
      pixel.style.left = `${col * pixelSize}px`; // position du pixel en partant de la gauche
      pixel.style.top = `${row * pixelSize}px`; // position du pixel en partant du haut
      let delay = Math.random() * 1; // valeur aléatoire pour le début de la transition (modifiable)
      pixel.style.transitionDelay = `${delay}s`; // incrémentation du debut de transition calculé précédement 
      pixelContainer.appendChild(pixel); //ajout de la div creer précédement dans le container html
    }
  }
});