let smoke_btns = document.querySelectorAll('.smoke-btn'); // Recuperation du bouton avec l'id 'smoke-btn'

//Bouche foreach
smoke_btns.forEach(btn => {
    //event lors du déplacement de la souris
    btn.addEventListener('mousemove', function(e){
        let rect = btn.getBoundingClientRect(); //parametre et position du bouton sur la page

        //Tracking de la position de la souris sur la page
        let x = e.clientX - rect.left;  
        let y = e.clientY - rect.top;

        let numParticles = 10; // Definition du nombres de boucles souhaitez pour notre animation

        for(let i=0; i < numParticles ; i++) {
            createParticle(x,y, btn); // Creation de la fumée au sein de la boucle
        }
    });
})


//Setup de la definition de la fumée
function createParticle (x,y, btn) { 
    let particle = document.createElement('div');
    particle.classList.add('smoke-particle');

    //Setup de la position d'origine de la fumée
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';

    //Setup de l'angle et de la distance (valuer numérique modifiable)
    let angle = Math.random() * 2 * Math.PI; 
    let distance = Math.random() * 80 + 20;

    //Creation des propriété tx et ty pour le deplacement lors de l'animation
    let tx = Math.cos(angle) * distance;
    let ty = Math.sin(angle) * distance;

    //Incorporation des propriété précédement creer
    particle.style.setProperty('--tx', tx + 'px');
    particle.style.setProperty('--ty', ty + 'px');

    //Incorporation du tous dans la div creer au debut de la fonction
    btn.appendChild(particle);

    //Delai avant supression de la div creer précédement
    setTimeout(() => {
        particle.remove()
    }, 1000);
}