"use strict";
const galleryDots = Array.from(document.getElementsByClassName("galleryDot"));
const galleryImages = Array.from(document.getElementsByClassName("galleryImage"));
const gray800 = "#1F2937";
let currentImage = 0;
function switchGalleryImage(imagePositin) {
    currentImage = imagePositin;
    const imageToShow = galleryImages[imagePositin];
    // let dotToShow = galleryDots[1]; //the middle dot
    const dotToShow = galleryDots[currentImage];
    // if (imagePositin == 0) dotToShow = galleryDots[0];
    // else if (imagePositin == galleryImages.length - 1) dotToShow = galleryDots[2]; //the last dot
    galleryImages.forEach((image) => {
        image.style.display = "none";
    });
    galleryDots.forEach((dot) => {
        dot.style.backgroundColor = gray800;
    });
    imageToShow.style.display = "block";
    dotToShow.style.backgroundColor = "white";
}
function nextImage(direction) {
    currentImage += direction;
    if (currentImage < 0)
        currentImage = galleryImages.length - 1;
    else if (currentImage >= galleryImages.length)
        currentImage = 0;
    switchGalleryImage(currentImage);
}
