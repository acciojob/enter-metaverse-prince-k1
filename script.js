//your JS code here. If required.
const status = document.getElementById("status");
const button = document.getElementById("enterBtn");
const body = document.getElementById("body");
function enterH(){
	let heading = document.createElement("h1");
    heading.textContent = 'Entered Metaverse';
	heading.id = 'status';
    // body.insertBefore(heading, button);
	document.body.prepend(heading);
    status.remove();
    // console.log(body);

    
}