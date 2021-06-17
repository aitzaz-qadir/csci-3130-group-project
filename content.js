// Javascript that will run in context to visited website.

var main = document.getElementById("container")
var links = document.getElementsByTagName("embed")
console.log("Hey this is my output;")
console.log(vid_find())


function vid_find() {
	var vids = document.getElementsByTagName("video");
	var vidSrcs = [];
	for (var i = 0; i < vids.length; i++) {
		vidSrcs.push(vids[i].src);
	}

	return vidSrcs;
}

function download() {
	
}