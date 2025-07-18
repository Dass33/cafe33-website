const currentSituationPopup = document.getElementById("currentSituationPopUp");
const currentSituationCloseButton = document.getElementById("closeCurrentSituation");

const currentSituationPopupEvents = document.getElementById("currentSituationPopUpEvents");
const currentSituationCloseButtonEvents = document.getElementById("closecurrentSituationMenuEvents");

if (currentSituationCloseButton && currentSituationPopup) {
    console.log("were are going")
    currentSituationCloseButton.addEventListener("click", () => {
        currentSituationPopup.style.display = "none";
        document.body.style.overflowY = "scroll"
    });
}

if (currentSituationCloseButtonEvents && currentSituationPopupEvents) {
    currentSituationCloseButtonEvents.addEventListener("click", () => {
        currentSituationPopupEvents.style.display = "none";
        document.body.style.overflowY = "scroll"
    });
}
