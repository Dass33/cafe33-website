"use strict";
const headerDiv = document.getElementById("header");
const reservationPopup = document.getElementById("reservationPopUp");
const reservationCloseButton = document.getElementById("closeReservationMenu");
const reservationButtons = Array.from(document.getElementsByClassName("reservation"));
const reservationPopupEvents = document.getElementById("reservationPopUpEvents");
const reservationCloseButtonEvents = document.getElementById("closeReservationMenuEvents");
const reservationButtonsEvents = Array.from(document.getElementsByClassName("reservationEvents"));
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
if (reservationPopupEvents) {
    reservationButtonsEvents.forEach((element) => {
        element.addEventListener("click", () => {
            reservationPopupEvents.style.display = "block";
            document.body.style.overflowY = "hidden";
            closeNav();
        });
    });
}
if (reservationCloseButtonEvents && reservationPopupEvents) {
    reservationCloseButtonEvents.addEventListener("click", () => {
        reservationPopupEvents.style.display = "none";
        document.body.style.overflowY = "scroll";
    });
}
