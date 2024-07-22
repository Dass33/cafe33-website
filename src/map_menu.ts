const mapMenuPopUp = document.getElementById("mapMenuPopUp")
const mapButton = document.getElementById("mapButton");
const mapIcon = document.getElementById("mapIcon");
const mapCloseIcon = document.getElementById("mapCloseIcon");

let isMenuOpen = false;

if (mapMenuPopUp && mapButton && mapIcon && mapCloseIcon) {
	mapButton.addEventListener("click", () => {
		if (!isMenuOpen) {
			mapMenuPopUp.style.display = "block";
			mapIcon.style.display = "none";
			mapCloseIcon.style.display = "block";
			isMenuOpen = true;
		}
		else {
			mapMenuPopUp.style.display = "none";
			mapIcon.style.display = "block";
			mapCloseIcon.style.display = "none";
			isMenuOpen = false;
		}
	});
}

if (mapMenuPopUp) {
	mapMenuPopUp.addEventListener("click", () => {
		mapMenuPopUp.style.display = "none";
	});
}
