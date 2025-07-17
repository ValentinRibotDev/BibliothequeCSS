const trackScroll = document.querySelector(".image-track"); // Recuperation de mon scroller on drag

window.onmousedown = e => { // Surveillance de la position de la souris lors d'un clic maintenue
    trackScroll.dataset.mouseDownAt = e.clientX;
}

window.onmouseup = () => { // Surveillance de la position de la souris lors d'un clic relaché
    trackScroll.dataset.mouseDownAt = "0"; // Reset de la valeur mouseDown
    trackScroll.dataset.prevPercentage = trackScroll.dataset.percentage; // Enregistrement de la valeur mouseUp
}

window.onmousemove = e => {
    if(trackScroll.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(trackScroll.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
    nextPercentageUnconstrained = parseFloat(trackScroll.dataset.prevPercentage) + percentage,
    nextPercentage = Math.max(Math.min(nextPercentageUnconstrained,0), -100);

    trackScroll.dataset.percentage = nextPercentage;

    // Animation du scroller en fonction du drag de la souris
    trackScroll.animate({
        transform: `translate(${nextPercentage}%, -50%)`
    }, {duration: 1200, fill: "forwards"});
    
    // Animation parallax des images en modifiant leur objectPosition en fonction du drag de la souris
    for(const image of trackScroll.querySelectorAll(".image")) { 
        image.animate({
            objectPosition: `${nextPercentage +100}% center`
        }, {duration: 1200, fill: "forwards"});            
    }
}


