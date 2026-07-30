const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const queryString = window.location.search;
const url = new URL(window.location.href);

let size = 40 // 40 pixels per metre
class obje {
    static counter = 0;

    constructor(name, data) { 
        this.id = ++obje.counter; 
        
        this.data = data;
    }

    

}

let objects = [new obje({"type":"circle","mass":100,"size":1,"x":50,"y":50})]

// 3. Function to update canvas drawing resolution
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Re-render graphics here (resizing clears the canvas)
    draw();
}
// 4. Sample draw function
function draw() {
    // 1 size = 1 metre. 1 mass = 1 gram. 
    // position is drawn at the centre of gravity.
    for (object in objects){
        if (object.data.type == "circle"){
            // the radius is equal to the size
            ctx.beginPath();
            ctx.arc(object.data.x, object.data.y, object.data.size, 0, 2 * Math.PI); // draws a circle :)
            ctx.stroke();
        } else {
                url.searchParams.set("error", "unknown-type");
                window.location.href = url.toString();
        }
    }
}

// 5. Initialize and listen for window resizing
if (queryString == ""){
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
} else {
    resizeCanvas();
    ctx.font = "50px serif";
    ctx.strokeText("ERROR!!!", 50, 90);
}