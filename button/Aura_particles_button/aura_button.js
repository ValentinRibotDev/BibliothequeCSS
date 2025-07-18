
let btnContainer = document.querySelector('.btn-container'); // Recuperation du conteneur
let btn = document.querySelector('.aura-btn'); // recuperation du bouton 

let interval; // creation d'une varialbe pour définir l'intervalle d'activation/desactivation du hover

let spawnDistance = 20; // variables pour la distance de base de x et y (modifiable)

function createParticles() {
  let particles = document.createElement('div'); // création d'une div pour chaque boucle for
  particles.classList.add('particles'); // ajout de la class 'particles' a chaque nouvelle div
  let btnWidth = btn.offsetWidth; //largeur du bouton 
  let btnHeight = btn.offsetHeight; // hauteur du bouton

  let angle = Math.random() * 2 * Math.PI; // creation d'un angle aleatoire

  let x = btnWidth / 2 + Math.cos(angle) * spawnDistance; // definition de la position X
  let y = btnHeight / 2 + Math.sin(angle) * spawnDistance; // definition de la position y

  let dx = Math.cos(angle)*100; // definition de la direction x
  let dy = Math.sin(angle)*100; // definition de la direction y

  particles.style.left = `${x}px`; // position de la particle sur x en partant de la gauche
  particles.style.top = `${y}px`; // position de la particle sur y en partant du haut
  particles.style.setProperty('--dx', `${dx}px`); // ajout des propriétés creer précédement
  particles.style.setProperty('--dy', `${dy}px`); // ajout des propriétés creer précédement

  btnContainer.appendChild(particles);  // incorporation de la div dans le conteneur

  setTimeout(() => { 
    particles.remove() //detruit les particules creer precedement apres un certain délai
  },2000) // délai a modifier ici
}

// Event Listener zz
btn.addEventListener('mouseenter', () => {
  interval = setInterval(createParticles,40); //Changer la valeur ici pour plus ou moins de particules
})

btn.addEventListener('mouseleave', () => {
  clearInterval(interval);
})