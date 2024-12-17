const imageList = document.querySelectorAll('.image-col img');
const mainImage = document.getElementById('main-image');
const titleElement = document.getElementById('pokemon-title');
const commentsElement = document.getElementById('pokemon-comments');


//Merci FromScratch pour le forEach
imageList.forEach(image => {
    image.addEventListener('click', () => {
        //Changement de l'image principale
        mainImage.src = image.src;
        mainImage.alt = image.alt;

        //Changements de titres et commentaires
        titleElement.textContent = image.title;
        commentsElement.textContent = image.alt;
    });
});