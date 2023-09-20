//your JS code here. If required.
const status = document.getElementById("status");
const button = document.getElementById("enterBtn");
const body = document.getElementById("body");
function enterH(){
	const heading = document.createElement("h1");
    heading.textContent = status.textContent;
    body.insertBefore(heading, button);
    status.remove();
    // console.log(body);

    
}