const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let size = 40; // 40 pixels per metre

let objects = [{"type":"circle","mass":100,"size":1,"x":50,"y":50,"id":1}];


function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
}

function draw() {
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,canvas.width, canvas.height);
    // 1 size = 1 metre. 1 mass = 1 gram. 
    // position is drawn at the centre of gravity.
    ctx.fillStyle = "green";
    for(let i = 0; i < objects.length; i++) {
        let object = objects[i];
        if (object.type == "circle"){
            // the radius is equal to the size
            ctx.beginPath();
            ctx.arc(object.x, object.y, object.size*size, 0, 2 * Math.PI); // draws a circle :)
            ctx.fill();
        }
    }
}


document.getElementById("tick").addEventListener('click', function(){
    draw();
});