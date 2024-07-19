const lunchMenuPopup = document.getElementById("lunchMenuPopUp");
const lunchMenuButton = document.getElementById("lunchMenuButton");

if (lunchMenuPopup && lunchMenuButton) {
	lunchMenuButton.addEventListener("click", () => {
		lunchMenuPopup.style.display = "block";
	});
}

