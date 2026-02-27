
function init() {
	const hamburgerButton = document.getElementById("hamburger-button")
	const mobileMenu = document.getElementById("mobile-menu")

	function toggleMenu() {
		mobileMenu.classList.toggle("hidden").toggle("flex")
		hamburgerButton.classList.toggle('toggle-button')
	}

	hamburgerButton.addEventListener("click", toggleMenu)
	mobileMenu.addEventListener("click", toggleMenu)
}

init()