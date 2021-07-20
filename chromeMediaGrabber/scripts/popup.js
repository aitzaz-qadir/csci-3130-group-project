//import axios from 'axios'
import youtube-dl as ydl from 'youtube-dl'
//const youtubedl = require('youtube-dl')
//import * as ydl from /modules/youtubedl.js

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

    alert(url);
}

function initDownload() {
    url = input.value;
    fileName = "myFile"

    download(url, fileName);
}