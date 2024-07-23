"use strict";
function openNav() {
    const menu = document.getElementById("menu");
    if (menu && menuButton) {
        menu.style.height = "100%";
        menuButton.style.visibility = "hidden";
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
}
const menuButton = document.getElementById("menuButton");
const closeMenu = document.getElementById("closeMenu");
if (menuButton) {
    menuButton.addEventListener("click", () => openNav());
}
if (closeMenu && menuButton) {
    closeMenu.addEventListener("click", () => closeNav());
}
