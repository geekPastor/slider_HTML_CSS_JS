let imageArray = document.getElementsByClassName('photo');


//variable qui me permet de savoir auelle image afficher
let etape = 0;
console.log(imageArray);

//declaration du compeur- de boucle
let compteur_Images;

//Prendre le nombre d'images qui sont dans le tableau
let nombreImages = imageArray.length;

//console.log(nombreImages);


//declaration des variables pour les boutons de defilement (suivant, precedent)
let nextImageBtn = document.querySelector('.nextImage');

let lastImageBtn = document.querySelector('.lastImage');


function changerImageActive(){
    for(compteur_Images = 0; compteur_Images < nombreImages; compteur_Images++){
        imageArray[compteur_Images].classList.remove('active');
    }
}

nextImageBtn.addEventListener('click', function(){
    etape++;
    if(etape >= nombreImages){
        etape = 0
    }
    changerImageActive();
    imageArray[etape].classList.add('active');
})



lastImageBtn.addEventListener('click', function(){
    etape--;
    if(etape < 0){
        etape = nombreImages+1;
    }
    changerImageActive();
    imageArray[etape].classList.add('active');
})


setInterval(function(){
    etape++;
    if(etape >= nombreImages){
        etape = 0;
    }
    changerImageActive();
    imageArray[etape].classList.add('active');
}, 3000);


/*Fonction pour nous permettre de defiler 
avec les touche de direction gauche droit

function keyButtons(e){
    if(e.keyCode === 37){
        nextImageBtn.addEventListener('click', function(){
            etape++;
            if(etape >= nombreImages){
                etape = 0
            }
            changerImageActive();
            imageArray[etape].classList.add('active');
        })
    }else if (e.keyCode == 39){
            
    lastImageBtn.addEventListener('click', function(){
        etape--;
        if(etape < 0){
            etape = nombreImages+1;
        }
        changerImageActive();
        imageArray[etape].classList.add('active');
    })
    }
}

document.addEventListener('keydown', keyButtons)
*/