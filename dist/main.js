"use strict";
const scrollLogo = document.getElementById("scrollLogo");
const cafeLogo = document.getElementById("cafeLogo");
const headerLogo = document.getElementById("headerLogo");
window.onscroll = function () { scrollHeader(); };
function scrollHeader() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        if (scrollLogo)
            scrollLogo.style.visibility = "visible";
        if (headerDiv) {
            headerDiv.style.backgroundColor = "#000000d0";
            headerDiv.style.zIndex = "50";
        }
        if (cafeLogo)
            cafeLogo.style.visibility = "hidden";
        if (headerLogo)
            headerLogo.style.backgroundColor = "transparent";
    }
    else {
        if (scrollLogo)
            scrollLogo.style.visibility = "hidden";
        if (headerDiv) {
            headerDiv.style.backgroundColor = "transparent";
            headerDiv.style.zIndex = "30";
        }
        if (cafeLogo)
            cafeLogo.style.visibility = "visible";
        if (headerLogo)
            headerLogo.style.backgroundColor = "#000000d0";
    }
}
