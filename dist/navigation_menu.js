"use strict";
const menuButton = document.getElementById("menuButton");
const closeMenu = document.getElementById("closeMenu");
function openNav() {
    const menu = document.getElementById("menu");
    if (menu && menuButton) {
        menu.style.height = "100%";
        menuButton.style.visibility = "hidden";
        if (mapIcon)
            mapIcon.style.display = "none";
        if (footerLeft)
            footerLeft.style.display = "none";
        document.body.style.overflowY = "hidden";
    }
}
function closeNav() {
    const menu = document.getElementById("menu");
    if (menu && menuButton) {
        menu.style.height = "0%";
        setTimeout(() => {
            menuButton.style.visibility = "visible";
        }, 400);
    }
    if (mapIcon)
        mapIcon.style.display = "block";
    if (footerLeft)
        footerLeft.style.display = "block";
    document.body.style.overflowY = "scroll";
}
if (menuButton) {
    menuButton.addEventListener("click", () => {
        openNav();
        if (headerDiv)
            headerDiv.style.display = "none";
    });
}
if (closeMenu && menuButton) {
    closeMenu.addEventListener("click", () => {
        closeNav();
        if (headerDiv)
            headerDiv.style.display = "block";
    });
}
