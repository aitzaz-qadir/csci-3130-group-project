var debug = true; // set to true to show debug messages

// Get DOM elements from popup.html
var downloadBtn = document.querySelector('.download-btn');
var input = document.querySelector('.input-url');

// Add event listener to download button to initiate download 
downloadBtn.addEventListener('click', initDownload);

function download(url, fileName) {
    var url = input.value            // get url from input field
    var fileName = "media-grabber";  // get file name from user default

    // Create an invisible element whose href is the download link
    var a = document.createElement("a");
    a.href = url; 
    a.setAttribute("download", fileName);

    // simulate clicking the invisible element to download its link
    a.click();   

    if ( debug ) {
        alert("download complete.");
    }
}

// Initializes download url and specifications
function initDownload() {
    if (debug) {
        console.log("Download initialized with url: " + url);
    }
    var url = input.value;
    var fileName = "media-grabber";

    download(url, fileName);
}