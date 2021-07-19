// Get DOM elements from popup.html
var downloadBtn = document.querySelector('.download-btn');
var input = document.querySelector('.input-url');

// Add event listener to download button to initiate download 
downloadBtn.addEventListener('click', download);

// Called when download button is clicked
function download() {
    link = input.value; // Get video link from input field
    alert(link);
}
