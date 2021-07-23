var debug = true; // set to true to show debug messages

// Get DOM elements from popup.html
var downloadBtn = document.querySelector('#download-btn');
var input = document.querySelector('#input-url');

// Add event listener to download button to initiate download  
downloadBtn.addEventListener('click', download);

function download(url, fileName) {
    var url = input.value            // get url from input field

    chrome.downloads.download({ url: url },
        function (id) {
        });

    if ( debug ) {
        alert("download should now be complete.");
    }
}