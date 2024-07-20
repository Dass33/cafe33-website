const lunchMenuPopup = document.getElementById("lunchMenuPopUp");
const lunchMenuButton = document.getElementById("lunchMenuButton");
const lunchCloseButton = document.getElementById("closeLunchMenu");
const lunchMenuPopUp = document.getElementById("lunchMenuPopUp")

if (lunchMenuPopup && lunchMenuButton) {
	lunchMenuButton.addEventListener("click", () => {
		lunchMenuPopup.style.display = "block";
	});
}



if (lunchCloseButton && lunchMenuPopup) {
	lunchCloseButton.addEventListener("click", () => {
		lunchMenuPopup.style.display = "none";
	});
}
if (lunchMenuPopUp) {
	lunchMenuPopUp.addEventListener("click", () => {
		lunchMenuPopUp.style.display = "none";
	});
}
