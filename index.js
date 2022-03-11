const items = document.querySelectorAll('.slider img');
const nbSlide = items.length;
const suivant = document.querySelector('#left');
const precedent = document.querySelector('#right');
let count = 0;

function slideSuivante(){
    items[count].classList.remove('active');
    
    if(count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }
    
    items[count].classList.add('active')
    
}
suivant.addEventListener('click', slideSuivante)


function slidePrecedente(){
    items[count].classList.remove('active');
    
    if(count > 0){
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].classList.add('active')
    
}
precedent.addEventListener('click', slidePrecedente)

function darck(){
   const moon=document.querySelector('#moon');
   const sun=document.querySelector('#sun');
   const body=document.querySelector('body');
   const title=document.querySelector('h3');
   title.style.color="white"
   body.style.backgroundColor="rgba(0,0,0,0.9)";
   moon.style.transform="translateX(-30px)";
   sun.style.transform="translateX(-30px)";

}
function white(){
   const moon=document.querySelector('#moon');
   const sun=document.querySelector('#sun');
   const body=document.querySelector('body');
   const title=document.querySelector('h3');
   title.style.color="black"
   body.style.backgroundColor="white";
   moon.style.transform="translateX(0px)";
   sun.style.transform="translateX(0px)";
}
function blurfocus(){
    const main=document.querySelector('.main');
    const image=document.querySelector('.container');
    const footer=document.querySelector('.footer');
    footer.classList.toggle('footer1');
    main.classList.toggle('main1');
    image.classList.toggle('container1');
}
function audio(){
    const audio= new Audio();
    audio.src="Tonalités.ogg";
    audio.play();
}
function audio1(){
    const audio1= new Audio();
    audio1.src="laser.ogg";
    audio1.play();
}
function audio3(){
    const audio3= new Audio();
    audio3.src="Calme.ogg";
    audio3.play();
}
function audio4(){
    const audio4= new Audio();
    audio4.src="Sifflement.ogg";
    audio4.play();
}