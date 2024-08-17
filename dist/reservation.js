"use strict";
const reservationPopup = document.getElementById("reservationPopUp");
const reservationCloseButton = document.getElementById("closeReservationMenu");
const headerDiv = document.getElementById("header");
const reservationButtons = Array.from(document.getElementsByClassName("reservation"));
if (reservationPopup) {
    reservationButtons.forEach((element) => {
        element.addEventListener("click", () => {
            reservationPopup.style.display = "block";
            document.body.style.overflowY = "hidden";
            closeNav();
            // if (mapIcon) mapIcon.style.display = "none";
            // if (headerDiv) headerDiv.style.display = "none";
        });
    });
}
if (reservationCloseButton && reservationPopup) {
    reservationCloseButton.addEventListener("click", () => {
        reservationPopup.style.display = "none";
        document.body.style.overflowY = "scroll";
        // if (headerDiv) headerDiv.style.display = "block";
        // if (mapIcon) mapIcon.style.display = "block";
    });
}
