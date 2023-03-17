class CentriodCalculatorApplication
{
	// Member varaible declaration.
	private mCanvas: HTMLCanvasElement;
	private mContext: CanvasRenderingContext2D;
	
	constructor()
	{
		let canvas = document.getElementById("mainCanvas") as HTMLCanvasElement;
		let context = canvas.getContext("2d") as CanvasRenderingContext2D;
		
		this.mCanvas = canvas;
		this.mContext = context;
		
		this.resizeCanvas();
		this.intializeEventHandlers();
	}

	private resizeCanvas()
	{
		this.mCanvas.width = window.innerWidth;
		this.mCanvas.height = window.innerHeight;
	}

	private intializeEventHandlers()
	{
		window.addEventListener("resize", this.resizeCanvas.bind(this));
	}
}

new CentriodCalculatorApplication();
