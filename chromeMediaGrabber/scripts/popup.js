// Get DOM elements from popup.html
var downloadBtn = document.querySelector('#download-btn');
var input = document.querySelector('#input-url');

// Add event listener to download button to initiate download  
downloadBtn.addEventListener('click', download);

function download(url, fileName) {
    var url = input.value            // get url from input field

    chrome.downloads.download({ url: url, saveAs: true },
        function (id) {
        });
}

var main = document.body;
var theme = localStorage.getItem("theme")
if (theme == "dark") {
	main.classList.toggle("dark-mode");
}