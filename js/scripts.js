const img = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// const img = [
//     'img/01.webp',
//     'img/02.webp',
//     'img/03.webp',
//     'img/04.webp',
//     'img/05.webp',

// ];

const images = document.querySelector('.images');




for (let i = 0; i < 1; i++ ) {
    
    images.innerHTML += `
        <div class="card sizeImg">
            <div> <img src="${img[0].image}" alt=""> </div>
            <div class="tittleText">
            <p> <h1> ${img[0].title} </h1> </p>
            <p> <h3> ${img[0].text} </h3> </p>
            </div>
        </div>

        <div class="card sizeImg">
           <div> <img src="${img[1].image}" alt=""> </div>
           <div class="tittleText">
            <p> <h1> ${img[1].title} </h1> </p>
            <p> <h3> ${img[1].text} </h3> </p>
            </div>
        </div>
    
        <div class="card sizeImg">
            <div> <img src="${img[2].image}" alt=""> </div>
            <div class="tittleText">
            <p> <h1> ${img[2].title} </h1> </p>
            <p> <h3> ${img[2].text} </h3> </p>
            </div>
        </div>
    
        <div class="card sizeImg">
            <div> <img src="${img[3].image}" alt=""> </div>
            <div class="tittleText">
            <p> <h1> ${img[3].title} </h1> </p>
            <p> <h3> ${img[3].text} </h3> </p>
            </div>
        </div>
        <div class="card sizeImg">
            <div> <img src="${img[4].image}" alt=""> </div>
            <div class="tittleText">
            <p> <h1> ${img[4].title} </h1> </p>
            <p> <h3> ${img[4].text} </h3> </p>
            </div>
        </div> 
             
    `;
}
let slideAttiva = 0;
let cards = document.getElementsByClassName('card');
cards[slideAttiva].classList.add('sizeImgActive')

let nextImg = document.querySelector('.arrowDown');

nextImg.addEventListener('click',
    function () {
        cards[slideAttiva].classList.remove('sizeImgActive');
        if (slideAttiva >= cards.length- 1) {
            slideAttiva = 0;
        }
        else  {
            slideAttiva++
        }
        
        cards[slideAttiva].classList.add('sizeImgActive');
        // cards[slideAttiva].classList.remove('sizeImgActive');
        // slideAttiva++; 
        // cards[slideAttiva].classList.add('sizeImgActive');
        console.log(cards[slideAttiva])
        
        
    }
    
)

let prevImg = document.querySelector('.arrowUp');


prevImg.addEventListener('click',
    function () {
        cards[slideAttiva].classList.remove('sizeImgActive');
        if (slideAttiva == 0) {
            slideAttiva = cards.length- 1;
        }
        else  {
            slideAttiva--
        }
        
        cards[slideAttiva].classList.add('sizeImgActive');
        // cards[slideAttiva].classList.remove('sizeImgActive');
        // slideAttiva++; 
        // cards[slideAttiva].classList.add('sizeImgActive');
        console.log(cards[slideAttiva])
        
    }
    
)
