"use strict";
const reservationPopup = document.getElementById("reservationPopUp");
const reservationCloseButton = document.getElementById("closeReservationMenu");
const growitoFormDiv = document.getElementById("growitoForm");
const headerDiv = document.getElementById("header");
const reservationButtons = Array.from(document.getElementsByClassName("reservation"));
if (reservationPopup) {
    reservationButtons.forEach((element) => {
        element.addEventListener("click", () => {
            reservationPopup.style.display = "block";
            closeNav();
            if (mapIcon)
                mapIcon.style.display = "none";
        });
    });
}
if (reservationCloseButton && reservationPopup && headerDiv) {
    reservationCloseButton.addEventListener("click", () => {
        reservationPopup.style.display = "none";
        headerDiv.style.display = "block";
        if (mapIcon)
            mapIcon.style.display = "block";
    });
}
