// Get DOM elements from popup.html
var downloadBtn = document.querySelector('.download-btn');
var input = document.querySelector('.input-url');

// Add event listener to download button to initiate download 
downloadBtn.addEventListener('click', initDownload);

// Called when download button is clicked

function download(url, fileName) {

    // Create an invisible element with url

    var a = document.createElement("a");
    a.href = url; 
    a.setAttribute("download", fileName);
    a.click();

    console.log("download finished.");
}

function initDownload() {
    console.log("Download initialized with url: " + url);
    var url = input.value;
    var fileName = "media-grabber";

    download(url, fileName);
}