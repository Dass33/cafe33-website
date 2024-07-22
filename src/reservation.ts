const reservationPopup = document.getElementById("reservationPopUp");
const reservationButton1 = document.getElementById("reservationButton1");
const reservationButton2 = document.getElementById("reservationButton2");
const reservationCloseButton = document.getElementById("closeReservationMenu");
const growitoFormDiv = document.getElementById("growitoForm");
const headerDiv = document.getElementById("header");

if (reservationPopup && headerDiv) {
	if (reservationButton1) {
		reservationButton1.addEventListener("click", () => {
			reservationPopup.style.display = "block";
			headerDiv.style.display = "none";
		});
	}

	if (reservationButton2) {
		reservationButton2.addEventListener("click", () => {
			reservationPopup.style.display = "block";
			headerDiv.style.display = "none";
		});
	}
}

if (reservationCloseButton && reservationPopup && headerDiv) {
	reservationCloseButton.addEventListener("click", () => {
		reservationPopup.style.display = "none";
		headerDiv.style.display = "block";
	});
}
// if () {
// 	lunchMenuPopUp.addEventListener("click", () => {
// 		lunchMenuPopUp.style.display = "none";
// 	});
// }
