"use strict";
const mapMenuPopUp = document.getElementById("mapMenuPopUp");
const mapButton = document.getElementById("mapButton");
const mapIcon = document.getElementById("mapIcon");
const mapCloseIcon = document.getElementById("mapCloseIcon");
const backgroundDiv = document.getElementById("backgroundDiv");
let isMenuOpen = false;
function closeMap() {
    if (mapMenuPopUp && mapIcon && mapCloseIcon) {
        mapMenuPopUp.style.display = "none";
        mapIcon.style.display = "block";
        mapCloseIcon.style.display = "none";
        isMenuOpen = false;
        if (footerLeft)
            footerLeft.style.display = "block";
        if (headerDiv)
            headerDiv.style.display = "block";
    }
}
if (mapMenuPopUp && mapButton && mapIcon && mapCloseIcon) {
    mapButton.addEventListener("click", () => {
        if (!isMenuOpen) {
            mapMenuPopUp.style.display = "block";
            mapIcon.style.display = "none";
            mapCloseIcon.style.display = "block";
            isMenuOpen = true;
            if (footerLeft)
                footerLeft.style.display = "none";
            if (headerDiv)
                headerDiv.style.display = "none";
        }
        else
            closeMap();
    });
}
if (mapMenuPopUp) {
    mapMenuPopUp.addEventListener("click", () => {
        closeMap();
    });
}
if (backgroundDiv) {
    backgroundDiv.addEventListener("click", () => {
        closeMap();
    });
}
