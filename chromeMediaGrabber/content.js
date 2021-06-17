// Javascript that will run in context to visited website.

// Declaring variables and calling the functions
var main = document.getElementById("container")
var links = document.getElementsByTagName("embed")
var srcsArray = vid_find()
console.log("Hey this is my output;")
console.log(srcsArray)

// Function that extracts blob urls from the website visited
function vid_find() {
	var vids = document.getElementsByTagName("video");
	var vidSrcs = [];
	for (var i = 0; i < vids.length; i++) {
		vidSrcs.push(vids[i].src);
	}

	return vidSrcs;
}

// function download() {
	
// }
