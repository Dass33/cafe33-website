const menuButton = document.getElementById("menuButton");
const closeMenu = document.getElementById("closeMenu");

const navButtons = Array.from(document.getElementsByClassName("navButton"));
const homeButtons = Array.from(document.getElementsByClassName("homeButton"));

function openNav() {
	const menu = document.getElementById("menu");
	if (menu && menuButton) {
		menu.style.height = "100%";
		menuButton.style.visibility = "hidden";
		if (headerDiv) headerDiv.style.display = "none";

		document.body.style.overflowY = "hidden"
		if (mapIcon) { mapIcon.style.display = "none"; }
	}
}

function closeNav() {
	const menu = document.getElementById("menu");

	if (menu && menuButton) {
		menu.style.height = "0%";
		setTimeout(() => {
			menuButton.style.visibility = "visible";
			if (mapIcon) { mapIcon.style.display = "block"; }
			if (headerDiv) headerDiv.style.display = "block";
			if (cafeLogo) cafeLogo.style.visibility = "visible";
		}, 300);
	}
	document.body.style.overflowY = "scroll"
}

if (menuButton) {
	menuButton.addEventListener("click", () => {
		openNav()
		if (headerDiv) headerDiv.style.display = "none";
	});

}

if (closeMenu && menuButton) {
	closeMenu.addEventListener("click", () => {
		closeNav()
		setTimeout(() => {
			if (headerDiv) headerDiv.style.display = "block";
		}, 400);
	});
}

navButtons.forEach((navButton) => {
	navButton.addEventListener("click", () => {
		const htmlBookmakr = navButton.textContent?.replace(/\s+/g, "_").toLowerCase();
		let navTo = "./index.html#";
		if (navButton.classList.contains("eng")) navTo = "./indexEN.html#";

		if (navTo) window.location.href = navTo + htmlBookmakr;
		document.documentElement.scrollTop -= 80;
		closeNav();
	});
});

homeButtons.forEach((homeButton) => {
	homeButton.addEventListener("click", () => {
		document.documentElement.scrollTop = 0;
		closeNav();
	});
});
