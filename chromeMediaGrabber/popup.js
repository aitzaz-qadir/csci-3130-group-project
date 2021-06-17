// Storing the video division into a variable
arrList = document.getElementById("vidfind");
// Storing the first blob from array as string
blob = srcsArray[0]


if (srcsArray.length > 0) {
	console.log(blob)
	arrList = document.getElementById("vidfind");
	arrList.innerHTML = blob;
}
else {
	console.log("blob")
	arrList = document.getElementById("vidfind");
	arrList.innerHTML = "blob" ;
}
