var main = document.body;
var theme = localStorage.getItem("theme")
if (theme == "dark") {
	main.classList.toggle("dark-mode");
}