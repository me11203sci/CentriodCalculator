function drawPoint(context, x, y)
{
	context.beginPath();
	context.moveTo(x, y - 10)
	context.lineTo(x, y - 5);
	context.moveTo(x - 10, y)
	context.lineTo(x - 5, y);
	context.moveTo(x + 5, y)
	context.lineTo(x + 10, y);
	context.moveTo(x, y + 5)
	context.lineTo(x, y + 10);
	context.rect(x - 4, y - 4, 8, 8);
	context.stroke();
}

function Point(xPosition, yPosition)
{
	this.name = "point";
	this.x = xPosition;
	this.y = yPosition;
}
