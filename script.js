//your JS code here. If required.
const status = document.getElementById("status");
const button = document.getElementById("enterBtn");
const body = document.getElementById("body");

function enterH(){
	status.textContent = "";
	let heading = document.createElement("h1");
    heading.textContent = 'Entered Metaverse';
	status.prepend(heading);
    // console.log(body);

    
}