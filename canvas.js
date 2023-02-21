var canvas = document.getElementById("mainCanvas");
const context = canvas.getContext("2d");
var entities = [];
var mode = "P";
var mouseX = 0;
var mouseY = 0;
var clickX = 0;
var clickY = 0;

function resizeCanvas()
{
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

function currentMouse(event)
{
	mouseX = event.clientX;
	mouseY = event.clientY;
}

function previousClick(event)
{
	clickX = event.clientX;
	clickY = event.clientY;
}

function storeShape(event)
{
	previousClick(event);
	if(mode === "P")
	{
		entities.push(new Point(clickX, clickY));
	}
	console.log(entities)
}

function currentFrame()
{
	context.clearRect(0, 0, canvas.width, canvas.height);
	drawUserInterface(context, 2, canvas.height - 5, mode);
	if(mode === "P") drawPoint(context, mouseX, mouseY);
	// draw already created shapes
	for(element of entities)
	{
		if(element.name === "point") drawPoint(context, element.x, element.y)
	}
	// draw any shapes the user is currently creating
	window.requestAnimationFrame(currentFrame);
}

resizeCanvas();
currentFrame();
window.addEventListener("keypress", function(event)
{
	if(event.defaultPrevented) return;
	
	switch(event.key)
	{
		case "d":
			mode = "D";
			break;
		case "s":
			mode = "S";
			break;
		case "t":
			mode = "T";
			break;
		case "q":
			mode = "Q";
			break;
		case "p":
			mode = "P";
			break;
		case "l":
			mode = "L";
			break;
		case "r":
			mode = "R";
			break;
		case "c":
			mode = "C";
			break;
		case "y":
			mode = "Y";
			break;
		case "b":
			mode = "B";
			break;
		default: return;
	}
});
window.addEventListener("resize", resizeCanvas, false);
window.addEventListener("mousemove", currentMouse, false);
window.addEventListener("click", storeShape, false);
