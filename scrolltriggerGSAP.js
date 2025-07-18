gsap.registerPlugin(ScrollTrigger);


// gsap.to(".square", {
//     x: 700,
//     duration: 3,
//     scrollTrigger: {
//         trigger: ".square2",
//         start: "top 80%",
//         end: "top 30%",
//         scrub: true, // true peut etre remplacer par une valeur en seconde pour rendre le scroll plus fluide
//         toggleActions: "restart none none none",
//         // type toggleActions : play pause resume reverse restart reset complete none
//         // parametres toggleActions : onEnter onLeave onEnterBack onLeaveBack
//         pin: ".square", // peut etre true ou le nom de l'element qui doit etre pin si le trigger est different
//         pinSpacing: true, // permet de prendre en compte l'espacement d'origine entre les deux elements
//         markers: true,
//     }   
// })

// const tl = gsap.timeline({ //permet de laisser gsap gerer le delay entre chaque animation automatiquement
//     scrollTrigger: { // on peux setup les parametres du scrollTrigger directement dedans
//         trigger: ".box",
//         markers:true,
//         start:"top 80%",
//         end:"top 30%",
//         scrub:1
//     }
// }); 

// tl.to(".box", {x:500,duration:5})
//   .to(".box", {y:200,duration:2})
//   .to(".box", {x:0,duration:2})

ScrollTrigger.create({
    trigger:".panel",
    start:"top 6%",
    markers:true,
    toggleClass:{
        targets:"nav",
        className: "nav-active"
    }
})