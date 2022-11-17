/*Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia indietro, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia avanti.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.



*/


/*
1 - stampare in html il contenuto dell"array 
2 - aggiungere gli event listener sui pulsanti per andare avanti ed indietro
3 - una variabile globale dove salvare l"indice dell"immagina attualmene attiva
4 - al click sui pulsanti avanti e indietro, aggiorno l"indice e di conseguenza aggiorno l"html mostrando 
l"immagine corrispondente.
*/
const sliderContainer = document.querySelector(".slider")
const images = [
    {
        image: "img/01.webp",
        title: "Marvel's Spiderman Miles Morale",
        text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
    },
    {
        image: "img/02.webp",
        title: "Ratchet & Clank: Rift Apart",
        text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
    }, 
    {
        image: "img/03.webp",
        title: "Fortnite",
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: "img/04.webp",
        title: "Stray",
        text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
    }, 
    {
        image: "img/05.webp",
        title: "Marvel's Avengers",
        text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    }
];

let imgIndex = 0;

for ( let i = 0 ; i < images.length ; i++){
    const imgEl = images[i];
    const sliderEl =`<div class="container-slider">
                        <img class="img-slider" src="${imgEl.image}"/>
                        <div class="text-slider">
                            <h2>${imgEl.title}</h2>
                            <p>${imgEl.text}</p>
                        </div>
                    </div>`;
    sliderContainer.innerHTML += sliderEl; 
 
}

const showImg = document.getElementsByClassName("container-slider");


showImg[imgIndex].classList.add("active");


const next = document.querySelector('.arrow-down');

next.addEventListener('click', function() {

    if(imgIndex === images.length - 1){

        imgIndex = 0;
        showImg[images.length - 1].classList.remove("active");
        showImg[imgIndex].classList.add("active");

    }else{
        imgIndex++;
        showImg[imgIndex - 1].classList.remove("active");
        showImg[imgIndex].classList.add("active");

    }


});

const previous = document.querySelector('.arrow-up');

previous.addEventListener('click', function() {

   if(imgIndex === 0){

        imgIndex = images.length - 1;
        showImg[0].classList.remove("active");
        showImg[imgIndex].classList.add("active");

    }else{
        imgIndex--;
        showImg[imgIndex + 1].classList.remove("active");
        showImg[imgIndex].classList.add("active");

    }

});