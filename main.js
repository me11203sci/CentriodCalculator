var canvas = document.getElementById("mainCanvas");

function resizeCanvas()
{
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas, false);
