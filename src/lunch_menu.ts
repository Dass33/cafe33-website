const lunchMenuPopUp = document.getElementById("lunchMenuPopUp")
const lunchMenuButton = document.getElementById("lunchMenuButton");
const lunchCloseButton = document.getElementById("closeLunchMenu");

if (lunchMenuPopUp && lunchMenuButton) {
	lunchMenuButton.addEventListener("click", () => {
		lunchMenuPopUp.style.display = "block";
	});
}



if (lunchCloseButton && lunchMenuPopUp) {
	lunchCloseButton.addEventListener("click", () => {
		lunchMenuPopUp.style.display = "none";
	});
}
if (lunchMenuPopUp) {
	lunchMenuPopUp.addEventListener("click", () => {
		lunchMenuPopUp.style.display = "none";
	});
}
