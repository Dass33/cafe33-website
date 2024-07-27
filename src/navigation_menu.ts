const menuButton = document.getElementById("menuButton");
const closeMenu = document.getElementById("closeMenu");

const navButtons = Array.from(document.getElementsByClassName("navButton"));

function openNav() {
	const menu = document.getElementById("menu");
	if (menu && menuButton) {
		menu.style.height = "100%";
		menuButton.style.visibility = "hidden";
		if (mapIcon) mapIcon.style.display = "none";
		if (headerDiv) headerDiv.style.display = "none";
		document.body.style.overflowY = "hidden"
	}
}

function closeNav() {
	const menu = document.getElementById("menu");

	if (menu && menuButton) {
		menu.style.height = "0%";
		setTimeout(() => {
			menuButton.style.visibility = "visible";
			if (mapIcon) mapIcon.style.display = "block";
			if (headerDiv) headerDiv.style.display = "block";
		}, 400);
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

		const navTo = `./index.html#${(navButton.textContent)?.toLowerCase()}`;
		if (navTo) window.location.href = navTo;
		closeNav();
	});
});
