"use strict";
const lunchMenuPopUp = document.getElementById("lunchMenuPopUp");
const lunchMenuButton = document.getElementById("lunchMenuButton");
const lunchCloseButton = document.getElementById("closeLunchMenu");
const footerLeft = document.getElementById("footerLeft");
function closeLunchMenu() {
    if (lunchMenuPopUp) {
        lunchMenuPopUp.style.display = "none";
        if (mapIcon)
            mapIcon.style.display = "block";
        if (footerLeft)
            footerLeft.style.display = "block";
        if (headerDiv)
            headerDiv.style.display = "block";
    }
}
if (lunchMenuPopUp && lunchMenuButton) {
    lunchMenuButton.addEventListener("click", () => {
        lunchMenuPopUp.style.display = "block";
        if (mapIcon)
            mapIcon.style.display = "none";
        if (footerLeft)
            footerLeft.style.display = "none";
        if (headerDiv)
            headerDiv.style.display = "none";
    });
}
if (lunchCloseButton && lunchMenuPopUp) {
    lunchCloseButton.addEventListener("click", () => {
        closeLunchMenu;
    });
}
if (lunchMenuPopUp) {
    lunchMenuPopUp.addEventListener("click", () => {
        closeLunchMenu();
    });
}
