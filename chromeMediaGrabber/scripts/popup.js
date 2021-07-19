// Import libraries for downloading videos
const fs = require('fs')
const youtubedl = require('youtube-dl')

var downloadBtn = document.querySelector('.download-btn');
var url = document.querySelector('.input-url');

downloadBtn.addEventListener('click', () => {
    console.log(`URL: ${url.value}`);
    download();
});

def download() {
    // Create downloadable video object from user-inputted url 
    const video = youtubedl('url.value',
        // Optional arguments passed to youtube-dl.
        ['--format=18']
    )

    // Will be called when the download starts.
    video.on('info', function (info) {
        console.log('Download started')
        console.log('filename: ' + info._filename)
        console.log('size: ' + info.size)
    })

    video.pipe(fs.createWriteStream('myvideo.mp4'))
}
