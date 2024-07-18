function openNav(menuButton: HTMLElement) {
	const menu = document.getElementById("menu");
	if (menu) {
		menu.style.height = "100%";
		menuButton.style.visibility = "hidden";
	}
}

function closeNav(menuButton: HTMLElement) {
	const menu = document.getElementById("menu");

	if (menu) {
		menu.style.height = "0%";
		setTimeout(() => {
			menuButton.style.visibility = "visible";
		}, 400);
	}
}

const menuButton = document.getElementById("menuButton");
const closeMenu = document.getElementById("closeMenu");

if (menuButton) {
	menuButton.addEventListener("click", () => openNav(menuButton));
}

if (closeMenu && menuButton) {
	closeMenu.addEventListener("click", () => closeNav(menuButton));
}
