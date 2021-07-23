var main = document.body;
var theme = localStorage.getItem("theme")
if (theme == "dark") {
	main.classList.toggle("dark-mode");
}

document.getElementById("darkBtn").addEventListener("click", function darkModeToggle() {
	main.classList.toggle("dark-mode");
	let theme = "light";
	if (document.body.classList.contains("dark-mode")) {
		theme = "dark";
	}
	localStorage.setItem("theme",theme);
});