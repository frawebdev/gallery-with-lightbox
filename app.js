//VARIABLES SECTION//

//gallery variable

const gallery = document.querySelector('.gallery');

//folder with images for lightbox inside

let imgFolder = [];

//lightbox variables

const lightBox = document.querySelector('.lightbox');
const photoContainer = document.querySelector('.photo');
const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');
const closeLightBox = document.querySelector('.fa-times');
let i = 0;

//FUNCTIONS SECTION//

function openLightBox (imgNum){
    $(lightBox).fadeIn('slow');
    photoContainer.style.cssText = `background-image: ${imgFolder[imgNum]};
                                    background-position:center;
                                    background-size:cover;`;
    lightBox.style.display = 'flex';
    i = imgNum;
}

function changeImg (change){
    photoContainer.style.cssText = `background-image: ${imgFolder[change]};
                                           background-position:center;
                                           background-size:cover;`;
}

//storing images for lightbox

for(i=0; i<4; i+=1){
    imgSelector = `url('img/o-tattoo-${i}.jpg')`;
    imgFolder.push(imgSelector);
}


//change image with buttons

photoContainer.addEventListener('click',(e)=>{
   if(e.target.id === 'btn-left' || e.target.id === 'arr-left'){
       if(i !== 0){
           i -= 1;
           changeImg(i);
       } else{
           openLightBox(3);
       }
   }
   
   if(e.target.id === 'btn-right' || e.target.id === 'arr-right'){
       if(i < 3){
       i += 1;
       changeImg(i);
   }else{
    openLightBox (0);
   }
}
})

//open lightbox with the right image on

gallery.addEventListener('click', (e)=>{
   if(e.target.id === 'img-0'){
       openLightBox(0);
   } else if(e.target.id === 'img-1'){
    openLightBox(1);
} else if(e.target.id === 'img-2'){
    openLightBox(2);
} else if(e.target.id === 'img-3'){
    openLightBox(3);
}
}
);

//closing lightbox

/*closeLightBox.addEventListener('click', ()=>{
    lightBox.style.display = 'none';
})*/

$(closeLightBox).click(()=>{
    $(lightBox).fadeOut();
})

console.log(mediaWidth);










