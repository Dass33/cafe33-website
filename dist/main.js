"use strict";
const hederDiv = document.getElementById("header");
const scrollLogo = document.getElementById("scrollLogo");
const cafeLogo = document.getElementById("cafeLogo");
const headerLogo = document.getElementById("headerLogo");
window.onscroll = function () { scrollHeader(); };
function scrollHeader() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        if (scrollLogo)
            scrollLogo.style.visibility = "visible";
        if (hederDiv)
            hederDiv.style.backgroundColor = "#000000d0";
        if (cafeLogo)
            cafeLogo.style.visibility = "hidden";
        if (headerLogo)
            headerLogo.style.backgroundColor = "transparent";
    }
    else {
        if (scrollLogo)
            scrollLogo.style.visibility = "hidden";
        if (hederDiv)
            hederDiv.style.backgroundColor = "transparent";
        if (cafeLogo)
            cafeLogo.style.visibility = "visible";
        if (headerLogo)
            headerLogo.style.backgroundColor = "#000000d0";
    }
}
