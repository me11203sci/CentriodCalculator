function drawUserInterface(context, x, y, mode)
{
	var text = "";
	switch(mode)
	{
		case "D":
			text = "Dimension - (D)";
			break;
		case "S":
			text = "Select - (S)";
			break;
		case "T":
			text = "Trim - (T)";
			break;
		case "Q":
			text = "Calculate - (Q)";
			break;
		case "L":
			text = "Line - (L)";
			break;
		case "R":
			text = "Rectangle - (R)";
			break;
		case "C":
			text = "Circle - (C)";
			break;
		case "Y":
			text = "Polygon - (Y)";
			break;
		case "B":
			text = "Bézier - (B)";
			break;
		default:
			text = "Point - (P)";
			break;
	}
	context.font = "16px courier";
	context.fillText("CURRENT MODE: " + text, x, y);
}
