var CentriodCalculatorApplication = /** @class */ (function () {
    function CentriodCalculatorApplication() {
        var canvas = document.getElementById("mainCanvas");
        var context = canvas.getContext("2d");
        this.mCanvas = canvas;
        this.mContext = context;
        this.resizeCanvas();
        this.intializeEventHandlers();
    }
    CentriodCalculatorApplication.prototype.resizeCanvas = function () {
        this.mCanvas.width = window.innerWidth;
        this.mCanvas.height = window.innerHeight;
    };
    CentriodCalculatorApplication.prototype.intializeEventHandlers = function () {
        window.addEventListener("resize", this.resizeCanvas.bind(this));
    };
    return CentriodCalculatorApplication;
}());
new CentriodCalculatorApplication();
